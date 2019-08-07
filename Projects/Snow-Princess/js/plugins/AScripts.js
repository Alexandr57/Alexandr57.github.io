//=============================================================================
// AScripts.js
//=============================================================================

/*:ru
 * @plugindesc AScripts Версия REL_1_Fix_1 Дополнительные скрипты
 * @author Alexandr_7
 * @help
Здравствуйте. Данный плагин будет содержать дополнительные скрипты для облегчения работы. Плагин распространяется бесплатно для комерческого и некомерческого использования.

Сразу скажу что запрещено чужие скрипты выдавать за свои. И еще просьба тем кому не лень добавлять сюда свои скрипты.Можно добавлять любые скрипты которые могут облечить работу с JavaScript например уменьшить очень длинные скрипты.

Вызов скриптов:
AScripts.СКРИПТ
Где СКРИПТ 	это скрипт который хотим вызвать.

Скрипты добавленные Alexandr_7:
getRandomInRange(min, max) - Пример AScripts.getRandomInRange(10, 20) (Вернет от 10 до 20 включительно) Получения рандомного числа от и до включая минимальное и максимальное.
coinToss() - Пример AScripts.coinToss() (Вернет 0 или 1) Получения рандомного числа 0 или 1
coinTossBool() - Пример AScripts.coinTossBool() (Вернет true или false) Получения рандомно true или false

Облегченые версии скрипта $gameSelfSwitches.value(key). В них не нужно указывать ИД карты. Только ИД события и булевое значение:

gameOnMapSetSelfSwitches(ИД События, Локальный переключатель ('A-D'), true или false); - Пример AScripts.gameOnMapSetSelfSwitches(1, 'A', true); Аналогично как $gameSelfSwitches.setValue([$gameMap.mapId(), 1, 'A'], true);

gameOnMapGetSelfSwitches(ИД События, Локальный переключатель ('A-D')); - Пример AScripts.gameOnMapGetSelfSwitches(1, 'A'); (Вернет значение локального переключателя A у события) Аналогично как $gameSelfSwitches.value([$gameMap.mapId(), 1, 'A']);
 
 */

class AScripts 
{
	static getRandomInRange(min, max) 
	{
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	static coinToss() 
	{
		return Math.floor(Math.random() * 2);
	}

	static coinTossBool() 
	{
		return (Math.floor(Math.random() * 2) === 0);
	}

	static gameOnMapSetSelfSwitches(aIDEvent, aSelfSwitch, aBool) {
		var key = [$gameMap.mapId(), aIDEvent, aSelfSwitch];
		$gameSelfSwitches.setValue(key, aBool);
	}

	static gameOnMapGetSelfSwitches(aIDEvent, aSelfSwitch) {
		var key = [$gameMap.mapId(), aIDEvent, aSelfSwitch];
		return $gameSelfSwitches.value(key);
	}
}