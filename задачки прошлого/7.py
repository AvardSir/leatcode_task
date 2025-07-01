import pandas as pd
from openpyxl import load_workbook

# === Исходные параметры ===
input_file = "ГИСП заказчики и конкуренты.xlsx"
sheet_name = "Сводная ГИСП"
output_file = "gisp_соответствия.xlsx"

# === Чтение исходного листа ===
df = pd.read_excel(input_file, sheet_name=sheet_name)

# === 1. Компания – Полное наименование ===
columns_1 = ["Компания", "Полное наименование"]
for col in columns_1:
    if col not in df.columns:
        raise ValueError(f"[1] Колонка '{col}' не найдена. Есть такие: {df.columns.tolist()}")
df1 = df[columns_1].dropna().drop_duplicates()

# === 2. Сфера – ОКПД2 ===
columns_2 = ["Сфера", "ОКПД2"]
for col in columns_2:
    if col not in df.columns:
        raise ValueError(f"[2] Колонка '{col}' не найдена. Есть такие: {df.columns.tolist()}")
df2 = df[columns_2].dropna().drop_duplicates()

# === 3. Полное наименование – Статус ===
columns_3 = ["Полное наименование", "Статус"]
for col in columns_3:
    if col not in df.columns:
        raise ValueError(f"[3] Колонка '{col}' не найдена. Есть такие: {df.columns.tolist()}")
df3 = df[columns_3].dropna().drop_duplicates()

# === Запись в один Excel на разные листы ===
with pd.ExcelWriter(output_file, engine="openpyxl") as writer:
    df1.to_excel(writer, sheet_name="Компания_Наименование", index=False)
    df2.to_excel(writer, sheet_name="Сфера_ОКПД2", index=False)
    df3.to_excel(writer, sheet_name="Наименование_Статус", index=False)

print(f"✅ Готово! Все три таблицы сохранены в файле: {output_file}")
