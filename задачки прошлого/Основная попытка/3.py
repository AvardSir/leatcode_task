import pandas as pd

# Загрузка Excel-файла
input_file = "ГИСП заказчики и конкуренты.xlsx"
sheet_name = "Сводная ГИСП"

# Чтение листа
df = pd.read_excel(input_file, sheet_name=sheet_name)

# Предположим, что нужные столбцы называются "Компания" и "Полное наименование"
# Если названия другие — подставь нужные
columns_needed = ["Компания", "Полное наименование"]

# Проверка наличия нужных колонок
for col in columns_needed:
    if col not in df.columns:
        raise ValueError(f"Колонка '{col}' не найдена в файле. Доступные колонки: {df.columns.tolist()}")

# Убираем дубликаты и строки с пустыми значениями
result_df = df[columns_needed].dropna().drop_duplicates()

# Сохраняем в новый Excel
output_file = "Компания_Полное_наименование.xlsx"
result_df.to_excel(output_file, index=False)

print(f"Готово! Файл сохранён как {output_file}")
