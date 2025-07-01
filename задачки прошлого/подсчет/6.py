import pandas as pd

summary_file = "сводка_по_компаниям.xlsx"
mapping_file = "gisp_соответствия.xlsx"

# Читаем сводку один раз
summary_df = pd.read_excel(summary_file, engine="openpyxl")

# ===== Функция очистки строк =====
def clean_string(s):
    if pd.isna(s):
        return s
    return s.replace('\xa0', ' ').strip().lower()

# =====================
# 1. Обновление "Компания"
# =====================
comp_sheet = "Компания_Наименование"
comp_df = pd.read_excel(mapping_file, sheet_name=comp_sheet, engine="openpyxl")

# Нормализуем
summary_df['Полное наименование_norm'] = summary_df['Полное наименование'].apply(clean_string)
comp_df['Полное наименование_norm'] = comp_df['Полное наименование'].apply(clean_string)

# Сопоставление
comp_map = pd.Series(comp_df['Компания'].values, index=comp_df['Полное наименование_norm']).to_dict()
summary_df['Компания'] = summary_df['Полное наименование_norm'].map(comp_map).fillna('')

# Проверка
matches = summary_df['Полное наименование_norm'].isin(comp_df['Полное наименование_norm'])
print(f"✅ Компания: совпадений найдено {matches.sum()} из {len(summary_df)}")
not_matched = summary_df.loc[~matches, 'Полное наименование'].unique()
print(f"❗️ Без соответствия (Компания): {len(not_matched)}\n{not_matched}")

# Удаляем временную колонку
summary_df.drop(columns=['Полное наименование_norm'], inplace=True)

# =====================
# 2. Обновление "Сфера"
# =====================
sphere_sheet = "Сфера_ОКПД2"
sphere_df = pd.read_excel(mapping_file, sheet_name=sphere_sheet, engine="openpyxl")

summary_df['ОКПД2_norm'] = summary_df['ОКПД2'].astype(str).apply(clean_string)
sphere_df['ОКПД2_norm'] = sphere_df['ОКПД2'].astype(str).apply(clean_string)

sphere_map = pd.Series(sphere_df['Сфера'].values, index=sphere_df['ОКПД2_norm']).to_dict()
summary_df['Сфера'] = summary_df['ОКПД2_norm'].map(sphere_map).fillna('')

summary_df.drop(columns=['ОКПД2_norm'], inplace=True)
print(f"✅ Колонка 'Сфера' обновлена")

# =====================
# 3. Обновление "Статус"
# =====================
status_sheet = "Наименование_Статус"
status_df = pd.read_excel(mapping_file, sheet_name=status_sheet, engine="openpyxl")

summary_df['Полное наименование_norm'] = summary_df['Полное наименование'].apply(clean_string)
status_df['Полное наименование_norm'] = status_df['Полное наименование'].apply(clean_string)

status_map = pd.Series(status_df['Статус'].values, index=status_df['Полное наименование_norm']).to_dict()
summary_df['Статус'] = summary_df['Полное наименование_norm'].map(status_map).fillna('')

summary_df.drop(columns=['Полное наименование_norm'], inplace=True)
print(f"✅ Колонка 'Статус' обновлена")

# =====================
# Сохраняем результат
# =====================
summary_df.to_excel(summary_file, index=False)
print(f"\n💾 Файл '{summary_file}' успешно обновлён.")
