import pandas as pd

summary_file = "сводка_по_компаниям.xlsx"
mapping_file = "gisp_соответствия.xlsx"
mapping_sheet = "Сфера_ОКПД2"

# Читаем сводку
summary_df = pd.read_excel(summary_file, engine="openpyxl")

# Читаем соответствия сферы
mapping_df = pd.read_excel(mapping_file, sheet_name=mapping_sheet, engine="openpyxl")

# Если нужно, нормализуем строки (удаляем пробелы, приводим к нижнему регистру)
def clean_string(s):
    if pd.isna(s):
        return s
    return s.strip().lower()

summary_df['ОКПД2_norm'] = summary_df['ОКПД2'].astype(str).apply(clean_string)
mapping_df['ОКПД2_norm'] = mapping_df['ОКПД2'].astype(str).apply(clean_string)

# Создаем словарь "ОКПД2" -> "Сфера"
mapping_dict = pd.Series(mapping_df['Сфера'].values, index=mapping_df['ОКПД2_norm']).to_dict()

# Обновляем колонку "Сфера" в сводке
summary_df['Сфера'] = summary_df['ОКПД2_norm'].map(mapping_dict).fillna('')

# Удаляем вспомогательный столбец
summary_df.drop(columns=['ОКПД2_norm'], inplace=True)

# Сохраняем обратно в файл
summary_df.to_excel(summary_file, index=False)

print(f"✅ Колонка 'Сфера' обновлена в файле '{summary_file}'.")
