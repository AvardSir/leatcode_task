import pandas as pd

# === Пути к файлам ===
svodka_file = "сводка_по_компаниям.xlsx"
corresp_file = "gisp_соответствия.xlsx"

# === Чтение сводной таблицы ===
df = pd.read_excel(svodka_file, sheet_name="Компании")

# === Чтение справочников ===
df_comp_name = pd.read_excel(corresp_file, sheet_name="Компания_Наименование")
df_sfera_okpd2 = pd.read_excel(corresp_file, sheet_name="Сфера_ОКПД2")
df_status = pd.read_excel(corresp_file, sheet_name="Наименование_Статус")

# === Нормализация ключей ===
def clean(val):
    if pd.isna(val):
        return ''
    return str(val).strip().replace('\xa0', ' ').replace('\n', ' ').lower()

# === Создание словарей соответствий ===
company_map = {clean(k): v for k, v in df_comp_name.values}
sfera_map = {clean(k): v for k, v in df_sfera_okpd2.values}
status_map = {clean(k): v for k, v in df_status.values}

# === Заполнение ПУСТЫХ ячеек ===
def fill_column(df, target_col, ref_col, mapping):
    for i, row in df.iterrows():
        current_value = df.at[i, target_col]
        if pd.isna(current_value) or str(current_value).strip() == '':
            key = clean(df.at[i, ref_col])
            new_val = mapping.get(key)
            if new_val:
                df.at[i, target_col] = new_val

# 🔁 Применение маппинга к нужным колонкам
fill_column(df, "Компания", "Полное наименование", company_map)
fill_column(df, "Статус", "Полное наименование", status_map)
fill_column(df, "Сфера", "ОКПД2", sfera_map)

# === Сохранение обновлённого файла ===
df.to_excel("сводка_по_компаниям_обновлена.xlsx", index=False)

print("✅ Обновление завершено. Сохранено в 'сводка_по_компаниям_обновлена.xlsx'")
