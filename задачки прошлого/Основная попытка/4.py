import pandas as pd

# Загружаем файл
input_file = "ГИСП заказчики и конкуренты.xlsx"
sheet_name = "Сводная ГИСП"

# Читаем файл
df = pd.read_excel(input_file, sheet_name=sheet_name)

# Проверим, есть ли нужные столбцы
if "Сфера" not in df.columns or "ОКПД2" not in df.columns:
    raise ValueError("Нет нужных колонок 'Сфера' и 'ОКПД2' в таблице!")

# Очищаем и берём только нужные столбцы
sfera_okpd_df = df[["Сфера", "ОКПД2"]].dropna().drop_duplicates()

# Сохраняем результат
sfera_okpd_df.to_excel("Соответствие_Сфера_ОКПД2.xlsx", index=False)

print("✅ Таблица соответствия 'Сфера – ОКПД2' успешно сохранена.")
