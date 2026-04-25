def analyze_path(config):
    """
    Анализирует конфиг путей и возвращает конечную точку.
    
    :param config: Список кортежей [(direction, distance), ...]
                   direction: 'N', 'S', 'E', 'W' (Север, Юг, Восток, Запад)
    :return: (x, y) - конечные координаты
    """
    x, y = 0, 0
    
    for direction, distance in config:
        if direction.upper() == 'N':
            y += distance
        elif direction.upper() == 'S':
            y -= distance
        elif direction.upper() == 'E':
            x += distance
        elif direction.upper() == 'W':
            x -= distance
        else:
            print(f"Предупреждение: Неизвестное направление {direction}")
            
    return (x, y)

# --- Пример работы ---
# Конфиг: 10 шагов на Север, 5 на Восток, 2 на Юг
dungeon_config = [('N', 10), ('E', 5), ('S', 2), ('W', 1)]

final_pos = analyze_path(dungeon_config)
print(f"Маршрут окончен. Вы находитесь в точке: {final_pos}")
# Вывод: Маршрут окончен. Вы находитесь в точке: (4, 8)
