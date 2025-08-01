import pandas as pd

# Исходный файл и лист
input_file = "ГИСП заказчики и конкуренты.xlsx"
sheet_name = "Сводная ГИСП"

# Чтение листа
df = pd.read_excel(input_file, sheet_name=sheet_name)

# Проверка наличия нужных колонок
columns = ["Полное наименование", "Статус"]
for col in columns:
    if col not in df.columns:
        raise ValueError(f"Колонка '{col}' не найдена. Есть такие: {df.columns.tolist()}")

# Убираем пустые строки и дубликаты
status_df = df[columns].dropna().drop_duplicates()

# Сохраняем в новый Excel
output_file = "Соответствие_ПолноеНаименование_Статус.xlsx"
status_df.to_excel(output_file, index=False)

print(f"✅ Таблица 'Полное наименование – Статус' сохранена как {output_file}")
