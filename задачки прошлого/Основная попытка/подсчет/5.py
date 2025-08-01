import pandas as pd

summary_file = "сводка_по_компаниям.xlsx"
mapping_file = "gisp_соответствия.xlsx"
mapping_sheet = "Наименование_Статус"

# Читаем сводку
summary_df = pd.read_excel(summary_file, engine="openpyxl")

# Читаем таблицу со статусами
mapping_df = pd.read_excel(mapping_file, sheet_name=mapping_sheet, engine="openpyxl")

# Функция нормализации строк
def clean_string(s):
    if pd.isna(s):
        return s
    return s.strip().lower()

summary_df['Полное наименование_norm'] = summary_df['Полное наименование'].apply(clean_string)
mapping_df['Полное наименование_norm'] = mapping_df['Полное наименование'].apply(clean_string)

# Создаем словарь: нормализованное название -> статус
mapping_dict = pd.Series(mapping_df['Статус'].values, index=mapping_df['Полное наименование_norm']).to_dict()

# Обновляем колонку "Статус" в сводке
summary_df['Статус'] = summary_df['Полное наименование_norm'].map(mapping_dict).fillna('')

# Убираем вспомогательную колонку
summary_df.drop(columns=['Полное наименование_norm'], inplace=True)

# Сохраняем результат
summary_df.to_excel(summary_file, index=False)

print(f"✅ Колонка 'Статус' обновлена в файле '{summary_file}'.")
