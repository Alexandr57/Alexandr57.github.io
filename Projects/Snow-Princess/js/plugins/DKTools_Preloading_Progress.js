/*
Title: Events glow
Author: DK (Denis Kuznetsov)
Site: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Version: 1.0
Release: 20.08.2019
First release: 20.08.2019
Supported languages: Russian, English
*/

/*ru
Название: Свечение событий
Автор: DK (Денис Кузнецов)
Сайт: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Версия: 1.0
Релиз: 20.08.2019
Первый релиз: 20.08.2019
Поддерживаемые языки: Русский, Английский
*/

/*:
 * @plugindesc v.1.0 Events glow
 * @author DK (Denis Kuznetsov)
 * @help

 ### Info about plugin ###
 Title: DKTools_Events_Glow
 Author: DK (Denis Kuznetsov)
 Site: https://dk-plugins.ru
 Version: 1.0
 Release: 20.08.2019
 First release: 20.08.2019
 Supported languages: Russian, English
 Thank you for your support: https://dk-plugins.ru/donate

 ### Requirement for plugin ###
 Availability of working plugin DKTools version 8.0.1 or above

 ### License and terms of use ###

 Recent information about the terms of use: https://dk-plugins.ru/terms-of-use

 You can:
 -Free use the plugin for your commercial and non commercial projects.
 -Translate the plugin to other languages (inform if you do this)
 -Change code of plugin, but you must specify a link to the original plugin

 You can't:
 -Delete or change any information about plugin (Title, authorship, contact information, version and release)
 *
 * @param ProgressBar_EnbleLogoLoading
 * @desc Show Logo Loading
 * @text Show Logo Loading
 * @type boolean
 * @on Show
 * @off Hide
 * @default false
 * 
 * @param ProgressBar_Position
 * @desc ProgressBar Position
 * @text ProgressBar Position
 * @type struct<ProgressBarPosition>
 * @default {"PositionType":"5","PositionX":"0","PositionY":"0"}
 * 
 * @param ProgressBar_Width
 * @type number
 * @min 272
 * @desc Width ProgressBar
 * @text Width ProgressBar
 * @default 272
 * 
 * @param ProgressBar_Height
 * @type number
 * @min 20
 * @desc Height ProgressBar
 * @text Height ProgressBar
 * @default 48
 * 
 * @param BackgroundPicture_ProgressBar
 * @type file
 * @dir img/system/
 * @desc ProgressBar Background Picture
 * @text ProgressBar Background Picture
 * 
 * @param Picture_ProgressBar
 * @type file
 * @dir img/system/
 * @desc ProgressBar Picture
 * @text ProgressBar Picture
 * 
 */

/*:ru
 * @plugindesc v.1.0 Свечение событий
 * @author DK (Денис Кузнецов)
 * @help

 ### Информация о плагине ###
 Название: DKTools_Events_Glow
 Автор: DK (Денис Кузнецов)
 Сайт: https://dk-plugins.ru
 Версия: 1.0
 Релиз: 20.08.2019
 Первый релиз: 20.08.2019
 Поддерживаемые языки: Русский, Английский
 Спасибо за Вашу поддержку: https://dk-plugins.ru/donate

 ### Требования и зависимости ###
 Наличие включенного плагина DKTools версии 8.0.1 или выше

 ### Лицензия и правила использования плагина ###

 Актуальная информация о правилах использования: https://dk-plugins.ru/terms-of-use

 Вы можете:
 -Бесплатно использовать данный плагин в некоммерческих и коммерческих проектах
 -Переводить плагин на другие языки (сообщите мне, если Вы перевели плагин на другой язык)
 -Изменять код плагина, но Вы обязаны указать ссылку на оригинальный плагин

 Вы не можете:
 -Убирать или изменять любую информацию о плагине (Название, авторство, контактная информация, версия и дата релиза)
 *
 * @param ProgressBar_EnbleLogoLoading
 * @desc Позать лого загрузки
 * @text Позать лого загрузки
 * @type boolean
 * @on Показать
 * @off Скрыть
 * @default false
 *
 * @param ProgressBar_Position
 * @desc Позиция ProgressBar
 * @text Позиция ProgressBar
 * @type struct<ProgressBarPosition>
 * @default {"PositionType":"5","PositionX":"0","PositionY":"0"}
 *
 * @param ProgressBar_Width
 * @type number
 * @desc Ширина ProgressBar
 * @text Ширина ProgressBar
 * @default 272
 * 
 * @param ProgressBar_Height
 * @type number
 * @desc Высота ProgressBar
 * @text Высота ProgressBar
 * @default 48
 *
 * @param BackgroundPicture_ProgressBar
 * @type file
 * @dir img/system/
 * @desc Фоновая картинка ProgressBar
 * @text Фоновая картинка ProgressBar
 *
 * @param Picture_ProgressBar
 * @type file
 * @dir img/system/
 * @desc Картинка ProgressBar
 * @text Картинка ProgressBar
 *
 */

/*~struct~ProgressBarPosition:

* @param PositionType
* @desc ProgressBar Position Type
* @type select
* @option Top Left Align
* @value 7
* @option Top Center Align
* @value 8
* @option Top Right Align
* @value 9
* @option Middle Left Align
* @value 4
* @option Middle Center Align
* @value 5
* @option Middle Right Align
* @value 6
* @option Bottom Left Align
* @value 1
* @option Bottom Center Align
* @value 2
* @option Bottom Right Align
* @value 3
* @option Custom position
* @value 0

* @param PositionX
* @type number
* @desc Position X (If "Custom position" is selected)
* @text Position X
* @default 0

* @param PositionY
* @type number
* @desc Position Y (If "Custom position" is selected)
* @text Position Y
* @default 0
*/

/*~struct~ProgressBarPosition:ru

* @param PositionType
* @desc Позиция полосы загрузки ресурсов
* @type select
* @option В верху слева
* @value 7
* @option В верху по центру
* @value 8
* @option В верху справа
* @value 9
* @option По центру слева
* @value 4
* @option По центру
* @value 5
* @option По центру справа
* @value 6
* @option Внизу слева
* @value 1
* @option Внизу по центру
* @value 2
* @option Внизу справа
* @value 3
* @option По своим координатам
* @value 0

* @param PositionX
* @type number
* @desc Позиция X (Если выбрано "По своим координатам")
* @text Позиция X
* @default 0

* @param PositionY
* @type number
* @desc Позиция Y (Если выбрано "По своим координатам")
* @text Позиция Y
* @default 0

*/

"use strict";

var Imported = Imported || {};
Imported.DKTools_Preloading_Progress = "1.0";

if (Imported.DKTools) {
  DKTools.PluginManager.requirePlugin("DKTools", "8.0.1");
} else {
  throw new Error('No plugin "DKTools"! Plugin "DKTools_Preloading_Progress" will not work!');
}

const PreloadingProgressParam = new DKTools.ParameterManager("DKTools_Preloading_Progress");

//===========================================================================
// DKTools.PreloadManager
//===========================================================================

const PreloadingProgress_DKTools_PreloadManager_finish = DKTools.PreloadManager._finish;
DKTools.PreloadManager._finish = function() {
  PreloadingProgress_DKTools_PreloadManager_finish.call(this);

  const scene = SceneManager._scene;

  if (scene) {
    if (PreloadingProgressParam.get("ProgressBar_EnbleLogoLoading") === false) {
      Graphics.startLoading();
      Graphics.endLoading();
    }

    scene.popScene();
  }
};

const PreloadingProgress_DKTools_PreloadManager_onFileLoad = DKTools.PreloadManager._onFileLoad;
DKTools.PreloadManager._onFileLoad = function(data) {
  PreloadingProgress_DKTools_PreloadManager_onFileLoad.call(this, data);

  const scene = SceneManager._scene;

  if (scene) {
    const progressBar = scene._progressBar;

    if (progressBar) {
      if (PreloadingProgressParam.get("ProgressBar_EnbleLogoLoading") === false) {
        Graphics.startLoading();
        Graphics.endLoading();
      }

      progressBar._file = data.url;

      progressBar.nextValue();
    }
  }
};

const PreloadingProgress_DKTools_PreloadManager_start = DKTools.PreloadManager.start;
DKTools.PreloadManager.start = function() {
  if (!this.isEnabled()) {
    return;
  }

  if (SceneManager.isCurrentScene(Scene_Preloading)) {
    PreloadingProgress_DKTools_PreloadManager_start.call(this);
  } else {
    const total = _.size(this._queue.audio) + _.size(this._queue.image);

    if (total === 0) {
      this._finish();

      return;
    }

    SceneManager.push(Scene_Preloading);
    SceneManager.prepareNextScene(total);
  }
};

//===========================================================================
// Scene_Preloading
//===========================================================================

function Scene_Preloading() {
  this.initialize.apply(this, arguments);
}

Scene_Preloading.prototype = Object.create(DKTools.Scene.prototype);
Scene_Preloading.prototype.constructor = Scene_Preloading;

//

Scene_Preloading.prototype.prepare = function(total) {
  this._total = total;
};

Scene_Preloading.prototype.setupPreloading = function() {
    if (PreloadingProgressParam.get("BackgroundPicture_ProgressBar")) {
        const promise = DKTools.Utils.Bitmap.loadAsync({
            folder: 'img/system/',
            filename: PreloadingProgressParam.get("BackgroundPicture_ProgressBar")
        });

        this._preloader.add(promise);
    }

    if (PreloadingProgressParam.get("Picture_ProgressBar")) {
        const promise = DKTools.Utils.Bitmap.loadAsync({
            folder: 'img/system/',
            filename: PreloadingProgressParam.get("Picture_ProgressBar")
        });

        this._preloader.add(promise);
    }
};

//

Scene_Preloading.prototype.createBackground = function() {
  this._background = new DKTools.Sprite();

  this._background.start();

  this.addChild(this._background);
};

Scene_Preloading.prototype.createAllSprites = function() {
  DKTools.Scene.prototype.createAllSprites.call(this);
  this.createProgressBar();
};

Scene_Preloading.prototype.createProgressBar = function() {
  const width = DKTools.Utils.isNumber(PreloadingProgressParam.get("ProgressBar_Width")) ? PreloadingProgressParam.get("ProgressBar_Width") : Graphics.boxWidth / 3;
  const height = DKTools.Utils.isNumber(PreloadingProgressParam.get("ProgressBar_Height")) ? PreloadingProgressParam.get("ProgressBar_Height") : 72;
  const offsetXY = 16;
  var _x = 0;
  var _y = 0;
  const ProgressBarPosition = PreloadingProgressParam.get("ProgressBar_Position");
  switch (ProgressBarPosition.PositionType) {
    case 1:
      _x = offsetXY;
      _y = Graphics.boxHeight - height - offsetXY;
      break;
    case 2:
      _x = (Graphics.boxWidth - width) / 2;
      _y = Graphics.boxHeight - height - offsetXY;
      break;
    case 3:
      _x = Graphics.boxWidth - width - offsetXY;
      _y = Graphics.boxHeight - height - offsetXY;
      break;
    case 4:
      _x = offsetXY;
      _y = (Graphics.boxHeight - height) / 2;
      break;
    case 5:
      _x = (Graphics.boxWidth - width) / 2;
      _y = (Graphics.boxHeight - height) / 2;
      break;
    case 6:
      _x = Graphics.boxWidth - width - offsetXY;
      _y = (Graphics.boxHeight - height) / 2;
      break;
    case 7:
      _x = offsetXY;
      _y = offsetXY;
      break;
    case 8:
      _x = (Graphics.boxWidth - width) / 2;
      _y = offsetXY;
      break;
    case 9:
      _x = Graphics.boxWidth - width - offsetXY;
      _y = offsetXY;
      break;
    default:
      _x = ProgressBarPosition.PositionX;
      _y = ProgressBarPosition.PositionY;
      break;
  }

  this._progressBar = new DKTools.Sprite.ProgressBar.Rectangle(_x, _y, width, height);

  this._progressBar.setValue(0);
  this._progressBar.setMaxValue(this._total);

  if (PreloadingProgressParam.get("BackgroundPicture_ProgressBar") != "" && PreloadingProgressParam.get("Picture_ProgressBar") != "") {
		this._progressBar.setDrawGraphicHandler(function() {
			this.drawBitmap({ folder: 'img/system/', filename: PreloadingProgressParam.get("BackgroundPicture_ProgressBar") });
			this.drawBitmap({ folder: 'img/system/', filename: PreloadingProgressParam.get("Picture_ProgressBar") },
				{ source: { width: this.value * this.width / this.maxValue } });
		}.bind(this._progressBar));
	}

  this._progressBar.setDrawTextHandler(
    function() {
      const text = this._file || "";

      this.drawText(text, { height: this.height });
    }.bind(this._progressBar)
  );

  this._progressBar.start();

  this.addChild(this._progressBar);
};

Scene_Preloading.prototype.start = function() {
  DKTools.Scene.prototype.start.call(this);
  DKTools.PreloadManager.start();
};
