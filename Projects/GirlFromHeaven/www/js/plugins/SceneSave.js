//--------------
// SceneSave.js
//--------------


/*:
* @plugindesc v1.0 Некоторые настройки для сцены сохранения\загрузки.
* @author dirge
*
* @param Показывать персонажей?
* @desc Показывать персонажей на файле сохранений\загрузки. true - вкл., false - выкл.
* @default true
*
* @param Количество слотов сохранения
* @desc Задает кол-во слотов сохранений. 
* По-умолчанию: 20
* @default 20
*
* @param Префикс сохранений
* @desc Задает префикс перед названием сохранений 
* @default 
* 
* @param Локальный путь к сохранениям
* @desc Изменяет локальный путь к сохранениям в приделах папки проекта. По-умолчанию: /save/
* @default /save/
*
* @param Название расширения сохранений
* @desc Изменяет нахзвание расширения сохранений. По-умолчанию: rpgsave 
* @default rpgsave
*
* @help
* Если задаешь новую папку для сохранений, то не забудь ее предварительно создать в папке проекта
*/

(function() {
	
	var parameters = PluginManager.parameters('SceneSave');
	var showCharacters = eval(parameters['Показывать персонажей?'] || true);
	var saveSlotNumber = Number(parameters['Количество слотов сохранения'] || 20);
	var preSaveTitle = String(parameters['Префикс сохранений'] || '');
	var saveLocalPath = String(parameters['Локальный путь к сохранениям'] || '/save/');
	var saveExtension = String(parameters['Название расширения сохранений'] || 'rpgsave');

	Window_SavefileList.prototype.drawContents = function(info, rect, valid) {
		var bottom = rect.y + rect.height;
		if (rect.width >= 420) {
			this.drawGameTitle(info, rect.x + 192, rect.y, rect.width - 192);
			if (valid && showCharacters) {
				this.drawPartyCharacters(info, rect.x + 220, bottom - 4);
			}
		}
		var lineHeight = this.lineHeight();
		var y2 = bottom - lineHeight;
		if (y2 >= lineHeight) {
			this.drawPlaytime(info, rect.x, y2, rect.width);
		}
	};

	StorageManager.localFileDirectoryPath = function() {
		var path = window.location.pathname.replace(/(\/www|)\/[^\/]*$/, saveLocalPath);
		if (path.match(/^\/([A-Z]\:)/)) {
			path = path.slice(1);
		}
		return decodeURIComponent(path);
	};

	StorageManager.localFilePath = function(savefileId) {
		var preTitle;
		preSaveTitle ? preTitle = preSaveTitle+'.' : preTitle = '';
		var name;
		if (savefileId < 0) {
			name = preTitle+'config.'+saveExtension;
		} else if (savefileId === 0) {
			name = preTitle+'global.'+saveExtension;
		} else {
			name = preTitle+'file%1.'.format(savefileId)+saveExtension;
		}
		console.log(preSaveTitle);
		return this.localFileDirectoryPath() + name;
	};

	DataManager.maxSavefiles = function() {
		return saveSlotNumber;
	};
})();