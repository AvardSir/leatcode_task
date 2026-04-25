def guide_through_ruins(start_pos, config):
    """
    Анализирует конфиг путей и возвращает финальные координаты.
    
    :param start_pos: tuple (x, y) - начальная точка
    :param config: list of str - список команд (например, ["N 2", "E 3"])
    :return: tuple (x, y) - финальная точка
    """
    x, y = start_pos
    
    for command in config:
        # Разбираем команду, например "N 2" -> direction="N", steps=2
        direction, steps = command.split()
        steps = int(steps)
        
        if direction == 'N':
            y += steps
        elif direction == 'S':
            y -= steps
        elif direction == 'E':
            x += steps
        elif direction == 'W':
            x -= steps
        else:
            print(f"⚠️ Внимание! Древний компас не знает направления: {direction}")
            
    return (x, y)

# --- Пример использования ---
# Начинаем в центре карты (0,0)
start = (0, 0)

# Конфиг: 2 шага на Север, 3 на Восток, 1 на Юг
ruin_config = ["N 2", "E 3", "S 1"]

final_point = guide_through_ruins(start, ruin_config)

print(f"🗺️ Искатель начал путь в {start}")
print(f"📜 Конфиг: {ruin_config}")
print(f"📍 Финальная точка: {final_point}")
# Ожидаемый вывод: (3, 1) — 3 на восток, 1 на север
