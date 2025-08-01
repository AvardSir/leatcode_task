import pandas as pd

summary_file = "сводка_по_компаниям.xlsx"
mapping_file = "gisp_соответствия.xlsx"
mapping_sheet = "Компания_Наименование"

# Читаем файлы
summary_df = pd.read_excel(summary_file, engine="openpyxl")
mapping_df = pd.read_excel(mapping_file, sheet_name=mapping_sheet, engine="openpyxl")

# Функция очистки строк
def clean_string(s):
    if pd.isna(s):
        return s
    return s.replace('\xa0', ' ').strip().lower()

# Приводим к единому формату
summary_df['Полное наименование_norm'] = summary_df['Полное наименование'].apply(clean_string)
mapping_df['Полное наименование_norm'] = mapping_df['Полное наименование'].apply(clean_string)

# Создаем словарь для маппинга
mapping_dict = pd.Series(mapping_df['Компания'].values, index=mapping_df['Полное наименование_norm']).to_dict()

# Заполняем колонку "Компания"
summary_df['Компания'] = summary_df['Полное наименование_norm'].map(mapping_dict).fillna('')

# Проверяем совпадения
matches = summary_df['Полное наименование_norm'].isin(mapping_df['Полное наименование_norm'])
print(f"Совпадений найдено: {matches.sum()} из {len(summary_df)}")

# Если нужно, вывести непонятые
not_matched = summary_df.loc[~matches, 'Полное наименование'].unique()
print(f"Названий без соответствия: {len(not_matched)}")
print(not_matched)

# Убираем вспомогательную колонку перед сохранением
summary_df.drop(columns=['Полное наименование_norm'], inplace=True)

# Сохраняем файл
summary_df.to_excel(summary_file, index=False)

print(f"✅ Файл '{summary_file}' обновлен успешно.")
