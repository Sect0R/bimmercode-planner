import type { Category, ExpertItem } from '@/types'

export const categories: Category[] = [
  {
    id: 'ACSM',
    icon: 'mdi-shield-account',
    title: { ru: 'ACSM — Безопасность и Ремни', en: 'ACSM — Safety & Seatbelts' },
    items: [
      {
        id: 'ac_pdc_speed',
        label: { ru: 'Отключение PDC/Top View (Скорость)', en: 'PDC/Top View Speed Switch-off' },
        desc: 'PDC/Top View speed switch-off',
        info: {
          ru: 'Порог скорости для автоматического отключения парктроников и кругового обзора.',
          en: 'Speed threshold for automatic deactivation of parking sensors and surround view.',
        },
      },
      {
        id: 'ac_cam_dist',
        label: { ru: 'Отключение камеры (Расстояние)', en: 'Rear Camera Distance Threshold' },
        desc: 'Rear view camera distance threshold',
        info: {
          ru: 'Расстояние, при котором камера заднего вида выключается.',
          en: 'Distance at which the rear view camera switches off.',
        },
      },
      {
        id: 'ac_cam_speed',
        label: { ru: 'Отключение камеры (Скорость)', en: 'Rear Camera Speed Threshold' },
        desc: 'Rear view camera speed threshold',
        info: {
          ru: 'Скорость, при которой камера заднего вида выключается.',
          en: 'Speed at which the rear view camera switches off.',
        },
      },
      {
        id: 'ac_belt_rem',
        label: {
          ru: 'Напоминание о ремне (Вод/Пасс)',
          en: 'Seat Belt Reminder (Driver/Passenger)',
        },
        desc: 'Seat belt reminder seat',
        info: {
          ru: 'Включает/выключает звуковой гонг для водительского и пассажирского сидений.',
          en: 'Enable/disable the acoustic chime for driver and passenger seats.',
        },
      },
      {
        id: 'ac_belt_ind',
        label: { ru: 'Индикатор ремня (Вод/Пасс)', en: 'Seat Belt Indicator (Driver/Passenger)' },
        desc: 'Seat belt indicator seat',
        info: {
          ru: 'Визуальный индикатор на панели приборов.',
          en: 'Visual indicator on the instrument cluster.',
        },
      },
      {
        id: 'ac_belt_dur',
        label: { ru: 'Длительность гонга ремня', en: 'Seat Belt Reminder Duration' },
        desc: 'Seat belt reminder duration',
        info: {
          ru: 'Продолжительность звукового сигнала напоминания.',
          en: 'Duration of the acoustic reminder: 5 to 90 seconds.',
        },
      },
      {
        id: 'ac_belt_dist',
        label: { ru: 'Расстояние гонга ремня', en: 'Seat Belt Reminder Distance' },
        desc: 'Seat belt reminder distance',
        info: {
          ru: 'Расстояние поездки, после которого включается гонг.',
          en: 'Distance threshold before the chime activates: 50m to 500m.',
        },
      },
      {
        id: 'ac_belt_speed',
        label: { ru: 'Скорость гонга ремня', en: 'Seat Belt Reminder Speed' },
        desc: 'Seat belt reminder speed',
        info: {
          ru: 'Скорость, при достижении которой включается гонг.',
          en: 'Speed threshold for the chime: 8 to 50 km/h.',
        },
      },
      {
        id: 'ac_belt_start',
        label: { ru: 'Напоминание при старте', en: 'Initial Seat Belt Reminder' },
        desc: 'Initial seat belt reminder',
        info: {
          ru: 'Напоминание о ремне сразу после запуска двигателя.',
          en: 'Enable/disable the initial acoustic reminder after engine start.',
        },
      },
    ],
  },
  {
    id: 'IHKA',
    icon: 'mdi-air-conditioner',
    title: { ru: 'IHKA — Климат-контроль', en: 'IHKA — Climate Control' },
    items: [
      {
        id: 'cl_auto_ac',
        label: { ru: 'Кондиционер в AUTO режиме', en: 'A/C On in AUTO Mode' },
        desc: 'Air conditioning on in AUTO mode',
        info: {
          ru: 'Автоматическое включение кондиционера при нажатии кнопки AUTO.',
          en: 'Automatically enables A/C when the AUTO button is pressed.',
        },
      },
      {
        id: 'cl_mem_ac',
        label: { ru: 'Память настроек кондиционера', en: 'A/C Setting Memory' },
        desc: 'Air conditioning setting memory',
        info: {
          ru: 'Запоминает состояние кондиционера (Вкл/Выкл) после выключения зажигания.',
          en: 'Remembers A/C state (on/off) between ignition cycles.',
        },
      },
      {
        id: 'cl_mem_circ',
        label: { ru: 'Память рециркуляции', en: 'Air Circulation Memory' },
        desc: 'Air circulation setting memory',
        info: {
          ru: 'Запоминает настройки циркуляции воздуха.',
          en: 'Remembers air recirculation setting between sessions.',
        },
      },
      {
        id: 'cl_auto_circ',
        label: { ru: 'Авто-рециркуляция', en: 'Automatic Air Recirculation' },
        desc: 'Automatic Air Recirculation',
        info: {
          ru: 'Включение функции автоматической рециркуляции воздуха.',
          en: 'Enable automatic air recirculation.',
        },
      },
      {
        id: 'cl_ac_circ',
        label: { ru: 'AC в режиме рециркуляции', en: 'A/C On in Recirculation Mode' },
        desc: 'AC on in air recirculation mode',
        info: {
          ru: 'Авто-включение AC при переходе в режим рециркуляции.',
          en: 'Automatically activates A/C when switching to recirculation mode.',
        },
      },
      {
        id: 'cl_auto_man',
        label: { ru: 'Применить AUTO к ручному режиму', en: 'Apply AUTO Settings to Manual Mode' },
        desc: 'Apply AUTO settings to manual mode',
        info: {
          ru: 'Перенос автоматических настроек при переходе в ручное управление.',
          en: 'Transfer automatic settings when switching to manual control.',
        },
      },
    ],
  },
  {
    id: 'BDC',
    icon: 'mdi-car-door',
    title: { ru: 'BDC — Кузов и Освещение', en: 'BDC — Body & Lighting' },
    items: [
      {
        id: 'bd_amb_cont',
        label: { ru: 'Ambient: Верхний контур', en: 'Ambient Lighting (Upper Contour)' },
        desc: 'Ambient lighting color contour',
        info: {
          ru: 'Настройка цвета верхнего контура подсветки по умолчанию.',
          en: 'Default color for the upper ambient lighting contour.',
        },
      },
      {
        id: 'bd_amb_low',
        label: { ru: 'Ambient: Нижний контур', en: 'Ambient Lighting (Lower Contour)' },
        desc: 'Ambient lighting color',
        info: {
          ru: 'Настройка цвета нижнего контура подсветки по умолчанию.',
          en: 'Default color for the lower ambient lighting.',
        },
      },
      {
        id: 'bd_bfd_speed',
        label: { ru: 'Brake Force: Порог скорости', en: 'Brake Force Display: Speed Threshold' },
        desc: 'Brake Force Display activation speed',
        info: {
          ru: 'Скорость активации индикации экстренного торможения.',
          en: 'Activation speed for Brake Force Display (5–50 km/h).',
        },
      },
      {
        id: 'bd_bfd_force',
        label: { ru: 'Brake Force: Усилие', en: 'Brake Force Display: Deceleration Level' },
        desc: 'Brake Force Display activation brake force',
        info: {
          ru: 'Сила нажатия на тормоз для активации индикации.',
          en: 'Deceleration level (5–8 m/s²) that triggers the indicator.',
        },
      },
      {
        id: 'bd_conv_del',
        label: { ru: 'Задержка комфортного открытия', en: 'Convenient Opening Delay' },
        desc: 'Convenient opening delay',
        info: {
          ru: 'Временной интервал перед началом открытия окон/люка.',
          en: 'Delay before windows/sunroof start opening (0.5s–2.5s).',
        },
      },
      {
        id: 'bd_conv_rear',
        label: { ru: 'Открытие задних окон (комфорт)', en: 'Convenient Opening: Rear Windows' },
        desc: 'Convenient opening rear windows',
        info: {
          ru: 'Включает возможность открытия задних стекол через функцию комфорта.',
          en: 'Enable rear windows to open via the convenient opening function.',
        },
      },
      {
        id: 'bd_conv_sun',
        label: { ru: 'Задержка люка (открытие)', en: 'Convenient Opening: Sunroof Delay' },
        desc: 'Convenient opening delay sunroof',
        info: {
          ru: 'Задержка перед открытием люка.',
          en: 'Delay before the sunroof starts opening (0.5s–3.5s).',
        },
      },
      {
        id: 'bd_close_rem',
        label: { ru: 'Удобное закрытие (Remote)', en: 'Convenient Closing (Remote)' },
        desc: 'Convenient closing remote control',
        info: {
          ru: 'Закрытие окон/люка с пульта управления.',
          en: 'Close windows and sunroof by holding the remote lock button.',
        },
      },
      {
        id: 'bd_close_ca',
        label: {
          ru: 'Удобное закрытие (Comfort Access)',
          en: 'Convenient Closing (Comfort Access)',
        },
        desc: 'Convenient closing Comfort Access',
        info: {
          ru: 'Закрытие через сенсор на дверной ручке.',
          en: 'Close via the ribbed sensor surface on the door handle.',
        },
      },
      {
        id: 'bd_close_del',
        label: { ru: 'Задержка комфортного закрытия', en: 'Convenient Closing Delay' },
        desc: 'Convenient closing delay',
        info: {
          ru: 'Временной интервал перед началом закрытия окон/люка.',
          en: 'Delay before windows/sunroof start closing.',
        },
      },
      {
        id: 'bd_close_front',
        label: { ru: 'Закрытие передних окон (комфорт)', en: 'Convenient Closing: Front Windows' },
        desc: 'Convenient closing front windows',
        info: {
          ru: 'Включает закрытие передних стёкол при комфортном закрытии.',
          en: 'Enable front windows to close via the convenient closing function.',
        },
      },
      {
        id: 'bd_close_sun',
        label: { ru: 'Задержка люка (закрытие)', en: 'Convenient Closing: Sunroof Delay' },
        desc: 'Convenient closing delay sunroof',
        info: {
          ru: 'Задержка перед закрытием люка при комфортном закрытии.',
          en: 'Delay before the sunroof starts closing.',
        },
      },
      {
        id: 'bd_horn_lock',
        label: {
          ru: 'Сигнал при закрытии (двигатель раб.)',
          en: 'Horn When Locking (Engine Running)',
        },
        desc: 'Horn signal when locking engine running',
        info: {
          ru: 'Гудок при блокировке авто с работающим двигателем.',
          en: 'Toggle the horn signal when locking with the engine running.',
        },
      },
      {
        id: 'bd_auto_lock',
        label: { ru: 'Время авто-блокировки', en: 'Automatic Lock Timer' },
        desc: 'Time until automatic lock',
        info: {
          ru: 'Время до автоматического запирания дверей.',
          en: 'Time until doors lock automatically after pulling away.',
        },
      },
      {
        id: 'bd_win_stop',
        label: { ru: 'Прерывание окна при двери (перед)', en: 'Window Stop on Door Open (Front)' },
        desc: 'Window lifter interruption (front)',
        info: {
          ru: 'Остановка переднего стеклоподъемника при открытии двери.',
          en: 'Front window lifter stops when the door is opened.',
        },
      },
      {
        id: 'bd_win_stop_r',
        label: { ru: 'Прерывание окна при двери (зад)', en: 'Window Stop on Door Open (Rear)' },
        desc: 'Rear window lifter interruption',
        info: {
          ru: 'Остановка заднего стеклоподъемника при открытии двери.',
          en: 'Rear window lifter stops when the door is opened.',
        },
      },
      {
        id: 'bd_drv_def',
        label: { ru: 'Режим вождения при старте', en: 'Default Driving Mode' },
        desc: 'Default driving mode',
        info: {
          ru: 'Выбор режима (Comfort/Sport) при запуске.',
          en: 'Mode selected at startup: Comfort, ECO PRO, or Sport.',
        },
      },
      {
        id: 'bd_wash_on',
        label: { ru: 'Омыватели фар (вкл/выкл)', en: 'Headlight Washers' },
        desc: 'Headlight washers',
        info: {
          ru: 'Включение/отключение функции омывателя фар.',
          en: 'Enable or disable the headlight washer system.',
        },
      },
      {
        id: 'bd_wash_num',
        label: { ru: 'Кол-во омываний фар', en: 'Headlight Washing Operations' },
        desc: 'Number of washing operations',
        info: {
          ru: 'Частота срабатывания омывателя фар.',
          en: 'Number of washing operations per windshield wash cycle.',
        },
      },
      {
        id: 'bd_wash_dur',
        label: { ru: 'Длительность впрыска (Фары)', en: 'Headlight Washer Injection Duration' },
        desc: 'Water injection duration',
        info: {
          ru: 'Время работы форсунок омывателя фар.',
          en: 'Duration of nozzle activation per injection.',
        },
      },
      {
        id: 'bd_wash_pause',
        label: { ru: 'Пауза омывателя фар', en: 'Headlight Washer Pause' },
        desc: 'Headlight cleaning pause',
        info: {
          ru: 'Интервал между импульсами впрыска.',
          en: 'Interval between injection pulses (200ms–2000ms).',
        },
      },
      {
        id: 'bd_wash_pulse',
        label: { ru: 'Кол-во импульсов впрыска фар', en: 'Headlight Washer Pulse Count' },
        desc: 'Number of water injection pulses',
        info: {
          ru: 'Количество импульсов форсунок за один цикл омывания.',
          en: 'Number of nozzle pulses per washing cycle.',
        },
      },
      {
        id: 'bd_rain_sens',
        label: { ru: 'Чувствительность датчика дождя', en: 'Rain Sensor Sensitivity' },
        desc: 'Rain-light-sensor sensitivity',
        info: {
          ru: 'Настройка порога срабатывания автоматических дворников.',
          en: 'Activation threshold for automatic wipers.',
        },
      },
      {
        id: 'bd_light_ctrl',
        label: { ru: 'Авто-управление светом', en: 'Automatic Light Control' },
        desc: 'Automatic light control',
        info: {
          ru: 'Настройка режима "0" переключателя (ничего не горит).',
          en: 'Activation position for the auto headlight switch.',
        },
      },
      {
        id: 'bd_mir_auto',
        label: { ru: 'Авто-наклон зеркала', en: 'Automatic Mirror Tilt' },
        desc: 'Automatic mirror tilt',
        info: {
          ru: 'Включение функции автонаклона правого зеркала при заднем ходе.',
          en: 'Enable auto-tilt of the right mirror when reverse gear is engaged.',
        },
      },
      {
        id: 'bd_mir_tilt',
        label: { ru: 'Угол наклона зеркала (%)', en: 'Mirror Tilt Angle (%)' },
        desc: 'Automatic mirror tilt value',
        info: {
          ru: 'Значение наклона правого зеркала при заднем ходе.',
          en: 'Tilt angle for the right mirror in reverse: 10% to 100%.',
        },
      },
      {
        id: 'bd_mir_unfold',
        label: { ru: 'Разложить зеркала (Opening)', en: 'Unfold Mirrors on Opening' },
        desc: 'Unfold mirrors with convenient opening',
        info: {
          ru: 'Зеркала раскладываются при комфортном открытии.',
          en: 'Mirrors unfold during convenient opening.',
        },
      },
      {
        id: 'bd_mir_fold',
        label: { ru: 'Сложить зеркала (Closing)', en: 'Fold Mirrors on Closing' },
        desc: 'Fold mirrors with convenient closing',
        info: {
          ru: 'Зеркала складываются при комфортном закрытии.',
          en: 'Mirrors fold during convenient closing.',
        },
      },
      {
        id: 'bd_heat_temp',
        label: { ru: 'Температура подогревов сидений', en: 'Seat Heating Temperature Levels' },
        desc: 'Seats/Backrests temperature levels 1-3',
        info: {
          ru: 'Настройка уровней 1, 2, 3 для передних и задних сидений и спинок.',
          en: 'Configure heat levels 1–3 for front/rear seats and backrests (30–47°C).',
        },
      },
      {
        id: 'bd_wipe_front',
        label: { ru: 'Циклы протирки (Спереди)', en: 'Wipe Cycles After Front Wash' },
        desc: 'Wipe cycles front washing',
        info: {
          ru: 'Количество взмахов после омывателя лобового.',
          en: 'Number of wiper strokes after front windshield washing.',
        },
      },
      {
        id: 'bd_wipe_rear',
        label: { ru: 'Циклы протирки (Сзади)', en: 'Wipe Cycles After Rear Wash' },
        desc: 'Wipe cycles rear washing',
        info: {
          ru: 'Количество взмахов после омывателя заднего стекла.',
          en: 'Number of wiper strokes after rear window washing.',
        },
      },
      {
        id: 'bd_rear_int',
        label: { ru: 'Интервал заднего дворника', en: 'Rear Wiper Interval' },
        desc: 'Rear wiper interval',
        info: {
          ru: 'Максимальный интервал — 12 секунд.',
          en: 'Rear wiper interval in seconds (max 12s).',
        },
      },
      {
        id: 'bd_fog_high',
        label: { ru: 'ПТФ с дальним светом (стробоскоп)', en: 'Fog Lights Off with High Beam' },
        desc: 'Fog lights off with high beam',
        info: {
          ru: 'Отключение ПТФ при включении дальнего (режим стробоскопа).',
          en: 'Fog lights automatically switch off when high beam is activated.',
        },
      },
      {
        id: 'bd_fog_park',
        label: { ru: 'ПТФ с габаритами', en: 'Fog Lights with Parking Lights' },
        desc: 'Fog lights with parking lights',
        info: {
          ru: 'Возможность включения ПТФ только с габаритами.',
          en: 'Allow fog lights to be active with parking lights only.',
        },
      },
      {
        id: 'bd_hazard_eb',
        label: { ru: 'Аварийка при экстр. торможении', en: 'Hazard Lights on Emergency Braking' },
        desc: 'Hazard warning signal emergency braking',
        info: {
          ru: 'Автоматическая аварийка при резком торможении.',
          en: 'Automatically activates hazard lights under emergency braking.',
        },
      },
    ],
  },
  {
    id: 'KAFAS',
    icon: 'mdi-eye-check',
    title: { ru: 'KAFAS — Ассистент водителя', en: 'KAFAS — Driver Assistance' },
    items: [
      {
        id: 'kf_sli_type',
        label: { ru: 'Тип знака Speed Limit Info', en: 'Speed Limit Info Sign Type' },
        desc: 'Speed Limit Info road sign type',
        info: {
          ru: 'Выбор типа распознаваемых дорожных знаков ограничения скорости.',
          en: 'Select recognized speed limit sign type: country-specific, EU white, or USA white.',
        },
      },
      {
        id: 'kf_ldw_speed',
        label: { ru: 'Скорость активации LDW', en: 'Lane Departure Warning Speed' },
        desc: 'Lane departure warning activation speed',
        info: {
          ru: 'По умолчанию 70 км/ч, можно снизить до 55 км/ч.',
          en: 'Default 70 km/h, can be reduced to 55 km/h.',
        },
      },
    ],
  },
  {
    id: 'DME',
    icon: 'mdi-engine',
    title: { ru: 'DME — Двигатель', en: 'DME — Engine' },
    items: [
      {
        id: 'dme_startstop',
        label: { ru: 'Память кнопки Start/Stop', en: 'Auto Start/Stop Memory' },
        desc: 'Auto Start Stop function memory',
        info: {
          ru: 'Запоминает выключенное состояние системы Start/Stop между поездками.',
          en: 'Remembers the deactivated state of Auto Start/Stop between trips.',
        },
      },
    ],
  },
  {
    id: 'HU-H',
    icon: 'mdi-monitor-dashboard',
    title: { ru: 'HU — Головное устройство', en: 'HU — Head Unit' },
    items: [
      {
        id: 'hu_acoustic',
        label: { ru: 'Флажок подтверждения сирены', en: 'Acoustical Lock Confirmation Checkbox' },
        desc: 'Checkbox acoustical lock confirmation',
        info: {
          ru: 'Меню в iDrive для вкл/выкл звука при закрытии.',
          en: 'iDrive settings checkbox to toggle the acoustic lock confirmation.',
        },
      },
      {
        id: 'hu_vol_start',
        label: { ru: 'Громкость при запуске', en: 'Maximum Volume at Startup' },
        desc: 'Maximum volume at start-up',
        info: {
          ru: 'Ограничение уровня громкости при включении авто.',
          en: 'Limit audio volume when the car starts: 10% to 50%.',
        },
      },
      {
        id: 'hu_chime',
        label: { ru: 'Звуковое предупреждение (Gong)', en: 'Warning Chime Style' },
        desc: 'Warning chime',
        info: {
          ru: 'Выбор стиля: BMW, BMW i, Mini, Rolls Royce.',
          en: 'Select chime brand style: BMW, BMW i, MINI, or Rolls-Royce.',
        },
      },
      {
        id: 'hu_ringtone',
        label: { ru: 'Рингтон звонка', en: 'Call Ringtone' },
        desc: 'Ringtone',
        info: {
          ru: 'Выбор мелодии входящего вызова: BMW / Mini / телефон.',
          en: 'Select incoming call ringtone: BMW, MINI, or smartphone.',
        },
      },
      {
        id: 'hu_drl_check',
        label: { ru: 'Флажок ДХО', en: 'Daytime Running Light Checkbox' },
        desc: 'Checkbox daytime running light',
        info: {
          ru: 'Пункт меню для отключения дневных ходовых огней.',
          en: 'iDrive settings checkbox for toggling daytime running lights.',
        },
      },
      {
        id: 'hu_anim',
        label: { ru: 'Стартовая анимация', en: 'Start Animation' },
        desc: 'Start animation',
        info: {
          ru: 'Видео-заставка при загрузке iDrive: BMW, M, Alpina, Mini, RR.',
          en: 'Startup animation during iDrive boot: BMW, M, Alpina, MINI, Rolls-Royce.',
        },
      },
      {
        id: 'hu_vol_pop',
        label: { ru: 'Всплывающее окно громкости', en: 'Volume Popup' },
        desc: 'Volume popup',
        info: {
          ru: 'Отображение уровня при регулировке.',
          en: 'Show volume level popup when adjusting audio.',
        },
      },
      {
        id: 'hu_rdc',
        label: {
          ru: 'Контроль давления и температуры шин',
          en: 'Tire Pressure & Temperature Display',
        },
        desc: 'Tire pressure control',
        info: {
          ru: 'Отображение температуры шин (при наличии датчиков RDC).',
          en: 'Show tire temperature alongside pressure (requires RDC sensors).',
        },
      },
      {
        id: 'hu_cam_zoom',
        label: { ru: 'Зум камеры заднего вида', en: 'Rear View Camera Zoom' },
        desc: 'Rear view camera zoom',
        info: {
          ru: 'Режим увеличения картинки камеры (режим фаркопа).',
          en: 'Enable zoom mode for the rear camera (tow hitch view).',
        },
      },
      {
        id: 'hu_text',
        label: { ru: 'Полнотекстовые сообщения', en: 'Full Text Messages' },
        desc: 'Display full text messages',
        info: {
          ru: 'Чтение SMS/сообщений полностью на экране.',
          en: 'Display full SMS/message text while driving.',
        },
      },
      {
        id: 'hu_sport_disp',
        label: { ru: 'Спортивные приборы', en: 'Sport Displays' },
        desc: 'Sport Displays',
        info: {
          ru: 'Индикаторы мощности и крутящего момента.',
          en: 'Power and torque indicators on the instrument cluster.',
        },
      },
      {
        id: 'hu_sport_col',
        label: { ru: 'Цвет спорт. приборов', en: 'Sport Displays Color' },
        desc: 'Sport Displays color',
        info: {
          ru: 'Выбор цветовой гаммы шкал.',
          en: 'Select color scheme for sport display dials.',
        },
      },
      {
        id: 'hu_vim',
        label: { ru: 'Видео в движении', en: 'Video in Motion' },
        desc: 'Video in motion',
        info: {
          ru: 'Снятие блокировки видео на ходу (NBT и выше).',
          en: 'Unlock video playback while driving (NBT and above).',
        },
      },
      {
        id: 'hu_usb',
        label: { ru: 'Видео через USB', en: 'Video via USB' },
        desc: 'Video via USB',
        info: {
          ru: 'Поддержка видео-файлов с флешки.',
          en: 'Enable video file playback from USB drives.',
        },
      },
      {
        id: 'hu_codec',
        label: { ru: 'Доп. видеокодеки', en: 'Additional Video Codecs' },
        desc: 'Additional video codecs',
        info: {
          ru: 'Активация Ogg, Xvid и VCD.',
          en: 'Activate Ogg, Xvid, and VCD codec support.',
        },
      },
      {
        id: 'hu_warn_start',
        label: {
          ru: 'Предупреждение при запуске (откл.)',
          en: 'Startup Warning Disclaimer (Disable)',
        },
        desc: 'Warning at start-up',
        info: {
          ru: 'Отключение юридического дисклеймера iDrive.',
          en: 'Disable the legal disclaimer screen shown during iDrive startup.',
        },
      },
      {
        id: 'hu_warn_cam',
        label: { ru: 'Предупреждение камеры (откл.)', en: 'Camera Warning (Disable)' },
        desc: 'Camera warning',
        info: {
          ru: 'Отключение текста-предупреждения на картинке камеры.',
          en: 'Disable the warning text overlay on the camera view.',
        },
      },
      {
        id: 'hu_warn_nv',
        label: {
          ru: 'Предупреждение ночного видения (откл.)',
          en: 'Night Vision Warning (Disable)',
        },
        desc: 'Night vision warning',
        info: {
          ru: 'Отключение предупреждения Night Vision.',
          en: 'Disable the Night Vision warning message.',
        },
      },
    ],
  },
  {
    id: 'KOMBI',
    icon: 'mdi-speedometer',
    title: { ru: 'KOMBI — Приборная панель', en: 'KOMBI — Instrument Cluster' },
    items: [
      {
        id: 'km_adv',
        label: { ru: 'Assisted Driving View', en: 'Assisted Driving View' },
        desc: 'CB_FZG_UMGEBUNG_FAS + 3 параметра',
        info: {
          ru: 'Визуализация потока (G-серия). Требует активации 4-х параметров в KOMBI4.',
          en: 'Traffic flow visualization (G-series). Requires 4 parameters in KOMBI4.',
        },
      },
      {
        id: 'km_rev_sig',
        label: { ru: 'Сигнал задней передачи', en: 'Reverse Gear Acoustic Signal' },
        desc: 'Acoustic signal reverse',
        info: { ru: 'Звук при включении R.', en: 'Acoustic signal when reverse gear is engaged.' },
      },
      {
        id: 'km_logo',
        label: { ru: 'Логотип на приборке', en: 'Instrument Cluster Logo' },
        desc: 'Logo',
        info: {
          ru: 'M, M40d, Alpina, Rolls Royce и др.',
          en: 'M Performance, M40d, Alpina, Rolls-Royce, and more.',
        },
      },
      {
        id: 'km_avg_res',
        label: { ru: 'Сброс средних значений', en: 'Average Values Reset' },
        desc: 'Average values reset',
        info: {
          ru: 'Автосброс через заданное время.',
          en: 'Auto-reset after 4h, 8h, every ride, or never.',
        },
      },
      {
        id: 'km_alpina',
        label: { ru: 'Стиль Alpina', en: 'Alpina Display Style' },
        desc: 'Alpina display style',
        info: {
          ru: 'Синие шкалы Alpina на приборной панели.',
          en: 'Alpina blue dials on the instrument cluster.',
        },
      },
      {
        id: 'km_bc_dig',
        label: { ru: 'Цифровая скорость в БК', en: 'Digital Speed in Board Computer' },
        desc: 'Digital speed in board computer',
        info: {
          ru: 'Скорость в меню бортового компьютера.',
          en: 'Show digital speed in the board computer menu.',
        },
      },
      {
        id: 'km_sp_dig',
        label: { ru: 'Цифровая скорость в спидометре', en: 'Digital Speed in Speedometer' },
        desc: 'Additional digital speed in speedometer',
        info: {
          ru: 'Доп. индикация цифровой скорости в центре шкалы.',
          en: 'Additional digital speed display in the center of the speedometer.',
        },
      },
      {
        id: 'km_cons_max',
        label: { ru: 'Макс. расход на шкале', en: 'Fuel Consumption Scale Maximum' },
        desc: 'Maximum fuel consumption display',
        info: {
          ru: 'Выбор: 20л или 30л/100км.',
          en: 'Select scale maximum: 15, 20, or 30 L/100km.',
        },
      },
      {
        id: 'km_fuel_warn',
        label: { ru: 'Предупреждение о топливе (1/2)', en: 'Low Fuel Warning (1/2)' },
        desc: 'Low fuel warning 1, 2',
        info: {
          ru: 'Порог 50км (вариант 1) или 90км (вариант 2).',
          en: 'Alert threshold: 50km (variant 1) or 90km (variant 2).',
        },
      },
      {
        id: 'km_color',
        label: { ru: 'Цвет панели (День/Ночь)', en: 'Cluster Color (Day/Night)' },
        desc: 'HINTERGRUND_FARBE_NACHT / TAG',
        info: {
          ru: 'Grau или Orange для ночного/дневного режима (F-серия, не LED).',
          en: 'Grey or Orange for night/day mode (F-series, non-LED cluster only).',
        },
      },
    ],
  },
  {
    id: 'HKL',
    icon: 'mdi-archive-arrow-down',
    title: { ru: 'HKL / HKFM — Багажник', en: 'HKL / HKFM — Tailgate' },
    items: [
      {
        id: 'tk_rem_close',
        label: { ru: 'Закрытие с ключа', en: 'Close Tailgate with Remote' },
        desc: 'Close tailgate with remote',
        info: {
          ru: 'Закрытие багажника коротким удержанием кнопки пульта.',
          en: 'Close the tailgate by holding the remote button.',
        },
      },
      {
        id: 'tk_btn_close',
        label: { ru: 'Закрытие кнопкой в двери', en: 'Close Tailgate with Door Button' },
        desc: 'Close tailgate with button in door',
        info: {
          ru: 'Закрытие с кнопки в салоне (отсек хранения водителя).',
          en: 'Close the tailgate using the button in the driver storage compartment.',
        },
      },
      {
        id: 'tk_btn_short',
        label: { ru: 'Кнопка в двери без удержания', en: 'Close Without Long Press (Door Button)' },
        desc: 'Close without long press (door btn)',
        info: {
          ru: 'Краткое нажатие кнопки в двери для закрытия.',
          en: 'Short press of the door button to close the tailgate.',
        },
      },
      {
        id: 'tk_rem_short',
        label: { ru: 'Кнопка на ключе без удержания', en: 'Close Without Long Press (Remote)' },
        desc: 'Close without long press (remote)',
        info: {
          ru: 'Краткое нажатие кнопки на ключе для закрытия.',
          en: 'Short press of the remote button to close the tailgate.',
        },
      },
      {
        id: 'tk_fn_remote',
        label: { ru: 'Функция двери с ключа', en: 'Tailgate Function (Remote)' },
        desc: 'Tailgate function remote control',
        info: {
          ru: 'Настройка действия кнопки ключа: открыть / открыть+закрыть.',
          en: 'Set remote button action: open only or open/close toggle.',
        },
      },
      {
        id: 'tk_fn_door',
        label: { ru: 'Функция двери с кнопки в двери', en: 'Tailgate Function (Door Button)' },
        desc: 'Tailgate function button in driver door',
        info: {
          ru: 'Действие при нажатии кнопки в отсеке хранения водителя.',
          en: 'Action for the button in the driver storage compartment.',
        },
      },
    ],
  },
  {
    id: 'FZD',
    icon: 'mdi-bell-ring',
    title: { ru: 'FZD — Сигнализация', en: 'FZD — Alarm & Confirmation' },
    items: [
      {
        id: 'fz_acoustic',
        label: { ru: 'Акустическое подтверждение', en: 'Acoustic Lock/Unlock Confirmation' },
        desc: 'Acoustical lock/unlock confirmation',
        info: {
          ru: 'Звук сирены при блокировке/разблокировке.',
          en: 'Enable/disable the horn beep when locking or unlocking.',
        },
      },
      {
        id: 'fz_vol',
        label: { ru: 'Громкость подтверждения', en: 'Confirmation Sound Volume' },
        desc: 'Confirmation sound volume',
        info: {
          ru: 'Тихо / Нормально / Громко / Очень громко.',
          en: 'Low / Normal / High / Very High.',
        },
      },
      {
        id: 'fz_freq',
        label: { ru: 'Частота звука', en: 'Confirmation Sound Frequency' },
        desc: 'Confirmation sound frequency',
        info: { ru: 'Настройка тональности сигнала.', en: 'Tone frequency: low, normal, or high.' },
      },
      {
        id: 'fz_dur',
        label: { ru: 'Продолжительность звука', en: 'Confirmation Sound Duration' },
        desc: 'Confirmation sound duration',
        info: {
          ru: 'Короткий / Нормальный / Долгий / Очень долгий.',
          en: 'Short / Normal / Long / Very Long.',
        },
      },
      {
        id: 'fz_type',
        label: { ru: 'Тип сигнала тревоги', en: 'Alarm Sound Type' },
        desc: 'Alarm sound',
        info: { ru: 'Европа / Британия / США.', en: 'Europe / Great Britain / USA variant.' },
      },
    ],
  },
]

export const expertItems: ExpertItem[] = [
  // ── DME ──────────────────────────────────────────────────────────────────
  {
    id: 'ex_startstop_mem',
    block: 'DME',
    category: { ru: 'DME — Двигатель', en: 'DME — Engine' },
    title: { ru: 'Память выключения Start/Stop', en: 'Auto Start/Stop Memory' },
    steps: [
      {
        param: 'TC_MSA_MEMORY',
        value: 'aktive',
        desc: {
          ru: 'Запоминает нажатое состояние кнопки Start/Stop',
          en: 'Remembers the pressed state of the Start/Stop button',
        },
      },
      {
        param: 'TC_MSA_DEFAULT_OFF',
        value: 'aktive',
        desc: {
          ru: 'Система отключена по умолчанию при каждом запуске',
          en: 'System is off by default on every startup',
        },
      },
    ],
    note: {
      ru: 'В Eco Individual дополнительно снять галочку Start/Stop. Если её нет — в ГУ выставить ECO_CONF_MSA в aktiv.',
      en: 'In Eco Individual, also uncheck Start/Stop. If not visible — set ECO_CONF_MSA to aktiv in the head unit.',
    },
  },
  {
    id: 'ex_recuperation',
    block: 'DME',
    category: { ru: 'DME — Двигатель', en: 'DME — Engine' },
    title: {
      ru: 'Отключение рекуперации (всегда заряд 100%)',
      en: 'Disable Recuperation (Always Charge to 100%)',
    },
    steps: [
      {
        param: 'DME → 3000 → IGR → Werte',
        value: '00',
        desc: {
          ru: 'Recuperation off — аккумулятор заряжается до 100%',
          en: 'Recuperation off — battery charges to 100%',
        },
      },
    ],
    note: {
      ru: 'Аккумулятор заряжается генератором до 100% вместо 80%. Экономия до 3% топлива от рекуперации теряется.',
      en: 'Battery charges via alternator to 100% instead of 80%. Fuel saving from recuperation (~3%) is lost.',
    },
  },
  // ── ACSM ─────────────────────────────────────────────────────────────────
  {
    id: 'ex_belt_disable',
    block: 'ACSM',
    category: { ru: 'ACSM — Ремни безопасности', en: 'ACSM — Seatbelts' },
    title: { ru: 'Полное отключение гонга ремня', en: 'Full Seat Belt Chime Disable' },
    steps: [
      {
        param: 'SbrVariantDriv',
        value: 'Werte=00',
        desc: {
          ru: 'Отключить все гонги ремня водителя',
          en: 'Disable all driver seat belt chimes',
        },
      },
      {
        param: 'SbrVariantPas',
        value: 'Werte=00',
        desc: {
          ru: 'Отключить гонги ремня пассажира (если есть)',
          en: 'Disable passenger seat belt chimes (if present)',
        },
      },
    ],
    note: {
      ru: 'Альтернатива: через FA добавить в HO-WORT опции OI11 и OI12.',
      en: 'Alternative: add OI11 and OI12 options to HO-WORT via FA coding.',
    },
  },
  {
    id: 'ex_belt_time',
    block: 'ACSM',
    category: { ru: 'ACSM — Ремни безопасности', en: 'ACSM — Seatbelts' },
    title: {
      ru: 'Время и расстояние напоминания ремня',
      en: 'Seat Belt Reminder Time and Distance',
    },
    steps: [
      {
        param: 'ACSM → 3001 → GWF_SBR_GESCHWINDIGKEIT',
        value: '05 (hex)',
        desc: {
          ru: '5 сек. вместо 20 — время напоминания',
          en: '5 sec instead of 20 — reminder duration',
        },
      },
      {
        param: 'ACSM → 3001 → GWF_SBR_DISTANCE',
        value: '05 (hex)',
        desc: {
          ru: '50 м вместо 200 м — расстояние напоминания',
          en: '50m instead of 200m — reminder distance',
        },
      },
      {
        param: 'ACSM → 3000 → Initialwarnung_GWF_IW',
        value: 'nicht_aktiv',
        desc: {
          ru: 'Отключить начальное предупреждение при зажигании',
          en: 'Disable initial warning at ignition on',
        },
      },
    ],
  },
  // ── MGU / HU ─────────────────────────────────────────────────────────────
  {
    id: 'ex_bw_sound',
    block: 'MGU',
    category: { ru: 'MGU — Головное устройство', en: 'MGU — Head Unit' },
    title: { ru: 'Профили звука Bowers & Wilkins', en: 'Bowers & Wilkins Sound Profiles' },
    steps: [
      {
        param: 'MGU → Audio_SYSTEM',
        value: 'alev4_ram',
        desc: {
          ru: 'Разблокировать пресеты звука (Студия, Концерт...)',
          en: 'Unlock sound presets (Studio, Concert...)',
        },
      },
    ],
    note: {
      ru: 'Требуется Harman/Kardon. В диагностике будет висеть ошибка предусилителя — это нормально.',
      en: 'Requires Harman/Kardon. A preamp fault will appear in diagnostics — this is expected.',
    },
  },
  {
    id: 'ex_engine_sound',
    block: 'HU_MGU',
    category: { ru: 'MGU — Головное устройство', en: 'MGU — Head Unit' },
    title: { ru: 'Меню «Звук мотора» в iDrive', en: 'Engine Sound Menu in iDrive' },
    steps: [
      {
        param: 'HU_MGU → DISPLAY_MENU_CONFIGURATION_ENGINE_SOUND',
        value: 'enabled',
        desc: { ru: 'Показать пункт меню', en: 'Show the menu item' },
      },
      {
        param: 'HU_MGU → DISPLAY_CONFIGURABILITY_ENGINE_SOUND',
        value: 'aktiv',
        desc: { ru: 'Разрешить изменение настройки', en: 'Allow the setting to be changed' },
      },
    ],
  },
  {
    id: 'ex_vim',
    block: 'MGU',
    category: { ru: 'MGU — Головное устройство', en: 'MGU — Head Unit' },
    title: { ru: 'Видео в движении (скрытое меню)', en: 'Video in Motion (Hidden Menu)' },
    steps: [
      {
        param: 'SPEEDLOCK_FREISCHALTMENU',
        value: 'aktive',
        desc: { ru: 'Открыть скрытое меню разблокировки', en: 'Open the hidden unlock menu' },
      },
    ],
    note: {
      ru: 'После кодировки в авто: удерживать шайбу iDrive ВВЕРХ → MEDIA → MENU → MEDIA. Процедуру повторить для второго ключа!',
      en: 'After coding: hold iDrive dial UP → MEDIA → MENU → MEDIA. Repeat for the second key!',
    },
  },
  {
    id: 'ex_startup_anim',
    block: 'MGU',
    category: { ru: 'MGU — Головное устройство', en: 'MGU — Head Unit' },
    title: {
      ru: 'Стартовая анимация (M, Alpina, RR...)',
      en: 'Startup Animation (M, Alpina, RR...)',
    },
    steps: [
      {
        param: 'MGU / HU_ENTRYNAV2 → STARTUP_EMBLEM',
        options: [
          { value: 'bmw', label: { ru: 'BMW (стандарт)', en: 'BMW (Standard)' } },
          { value: 'M', label: { ru: 'M Performance', en: 'M Performance' } },
          { value: 'alpina', label: { ru: 'Alpina', en: 'Alpina' } },
          { value: 'mini', label: { ru: 'MINI', en: 'MINI' } },
          { value: 'rr', label: { ru: 'Rolls-Royce', en: 'Rolls-Royce' } },
        ],
      },
    ],
  },
  {
    id: 'ex_warning_chime',
    block: 'MGU',
    category: { ru: 'MGU — Головное устройство', en: 'MGU — Head Unit' },
    title: { ru: 'Звуковое оформление авто (гонги)', en: 'Vehicle Sound Theme (Chimes)' },
    steps: [
      {
        param: 'MGU → BRAND',
        desc: { ru: 'i-Step не ниже 2019.07', en: 'i-Step 2019.07 or newer' },
        options: [
          { value: 'bmw', label: { ru: 'BMW (по умолчанию)', en: 'BMW (Default)' } },
          { value: 'bmw_i', label: { ru: 'BMW i', en: 'BMW i' } },
          { value: 'mini', label: { ru: 'MINI', en: 'MINI' } },
          { value: 'rr', label: { ru: 'Rolls-Royce', en: 'Rolls-Royce' } },
        ],
      },
    ],
  },
  {
    id: 'ex_sound_style',
    block: 'HU_ENTRYNAV2',
    category: { ru: 'MGU — Головное устройство', en: 'MGU — Head Unit' },
    title: {
      ru: 'Тема звукового оформления (BMW i8, RR, Mini)',
      en: 'Sound Signal Theme (BMW i8, RR, Mini)',
    },
    steps: [
      {
        param: 'HU_ENTRYNAV2 → SOUND_SIGNAL_SET',
        options: [
          { value: 'bmw', label: { ru: 'BMW', en: 'BMW' } },
          { value: 'bmw_i', label: { ru: 'BMW i8 стиль', en: 'BMW i8 style' } },
          { value: 'mini', label: { ru: 'MINI', en: 'MINI' } },
          { value: 'rr', label: { ru: 'Rolls-Royce', en: 'Rolls-Royce' } },
        ],
      },
    ],
  },
  {
    id: 'ex_hmi_brand',
    block: 'HU_ENTRYNAV2',
    category: { ru: 'MGU — Головное устройство', en: 'MGU — Head Unit' },
    title: { ru: 'Тема оформления ГУ (HMI_BRAND)', en: 'Head Unit Theme (HMI_BRAND)' },
    steps: [
      {
        param: 'HU_ENTRYNAV2 → HMI_BRAND',
        value: 'значение из списка',
        desc: {
          ru: 'Смена визуальной темы iDrive (работает по-разному)',
          en: 'Change iDrive visual theme (results vary per model)',
        },
      },
    ],
  },
  {
    id: 'ex_sport_color',
    block: 'HU_ENTRYNAV2',
    category: { ru: 'MGU — Головное устройство', en: 'MGU — Head Unit' },
    title: {
      ru: 'Цвет спортивных приборов → серый (M-стиль)',
      en: 'Sport Displays Color → Grey (M-style)',
    },
    steps: [
      {
        param: 'HU_ENTRYNAV2 → M_VECHICLE',
        value: 'aktive',
        desc: {
          ru: 'Серые шкалы вместо оранжевых (не работает на MGU)',
          en: 'Grey dials instead of orange (does not work on MGU)',
        },
      },
    ],
  },
  {
    id: 'ex_tyre_temp',
    block: 'NBT / MGU',
    category: { ru: 'MGU — Головное устройство', en: 'MGU — Head Unit' },
    title: { ru: 'Показывать температуру шин (RDC)', en: 'Show Tire Temperature (RDC)' },
    steps: [
      {
        param: 'HU_NBT → 3001 → RDC_DRUCK_TEMP',
        value: 'druck_und_temperatur',
        desc: {
          ru: 'Вместо только давления — давление и температура',
          en: 'Show pressure and temperature instead of pressure only',
        },
      },
    ],
  },
  {
    id: 'ex_usb_video',
    block: 'HU_NBT',
    category: { ru: 'MGU — Головное устройство', en: 'MGU — Head Unit' },
    title: { ru: 'Сохранение видео с флешки на диск', en: 'Save USB Video to Internal Storage' },
    steps: [
      {
        param: 'HU_NBT → 3000 → ENT_MC_VIDEO_SUPPORT',
        value: 'aktiv',
        desc: { ru: 'Разрешить копирование видео с USB', en: 'Allow copying video from USB' },
      },
    ],
  },
  {
    id: 'ex_5blinker',
    block: 'MGU',
    category: { ru: 'MGU — Головное устройство', en: 'MGU — Head Unit' },
    title: { ru: '5 сигналов поворотника вместо 3', en: '5 Turn Signal Flashes Instead of 3' },
    steps: [
      {
        param: 'MGU → 5_FACH_TIPPBLINKEN',
        value: 'aktive (Werte=01)',
        desc: { ru: 'Только для MGU', en: 'MGU only' },
      },
    ],
  },
  {
    id: 'ex_seat_heat_menu',
    block: 'MGU',
    category: { ru: 'MGU — Головное устройство', en: 'MGU — Head Unit' },
    title: {
      ru: 'Меню подогрева сидений в климате (MGU)',
      en: 'Seat Heating Menu in Climate (MGU)',
    },
    steps: [
      {
        param: 'MGU → AKT_AUTO_SITZE_FRONT',
        value: 'heizung',
        desc: {
          ru: 'Подогрев передних сидений в автоматическом режиме',
          en: 'Front seat heating in automatic mode',
        },
      },
      {
        param: 'MGU → AKT_AUTO_LENKRAD',
        value: 'aktiv',
        desc: {
          ru: 'Подогрев руля в автоматическом режиме',
          en: 'Steering wheel heating in automatic mode',
        },
      },
      {
        param: 'BDC_BODY → LHZ_CCM_IKF',
        value: 'aktiv',
        desc: { ru: 'Активировать управление подогревом', en: 'Activate heating control' },
      },
      {
        param: 'BDC_BODY → IKF_ENABLE',
        value: 'IKF_ALLE_SITZE',
        desc: {
          ru: 'Все сиденья (водитель включается только при пристёгнутом ремне)',
          en: 'All seats (driver activates only when belted)',
        },
      },
    ],
  },
  {
    id: 'ex_seat_heat_nbt',
    block: 'HU_NBT_EVO',
    category: { ru: 'MGU — Головное устройство', en: 'MGU — Head Unit' },
    title: {
      ru: 'Подогрев/вентиляция сидений в климате (NBT EVO)',
      en: 'Seat Heating/Ventilation in Climate (NBT EVO)',
    },
    steps: [
      {
        param: 'HU_NBT_EVO → 3000 HMI → AKT_AUTO_SITZE_FRONT',
        desc: { ru: 'Передние сиденья', en: 'Front seats' },
        options: [
          { value: 'heizung', label: { ru: 'Только подогрев', en: 'Heating only' } },
          { value: 'kuehlung', label: { ru: 'Только вентиляция', en: 'Ventilation only' } },
          {
            value: 'heizung_kuehlung',
            label: { ru: 'Подогрев + вентиляция', en: 'Heating + ventilation' },
          },
        ],
      },
      {
        param: 'HU_NBT_EVO → 3000 HMI → AKT_AUTO_SITZE_FOND',
        desc: { ru: 'Задние сиденья', en: 'Rear seats' },
        options: [
          { value: 'heizung', label: { ru: 'Только подогрев', en: 'Heating only' } },
          { value: 'kuehlung', label: { ru: 'Только вентиляция', en: 'Ventilation only' } },
          {
            value: 'heizung_kuehlung',
            label: { ru: 'Подогрев + вентиляция', en: 'Heating + ventilation' },
          },
        ],
      },
      { param: 'BDC_BODY → LHZ_CCM_IKF', value: 'aktiv' },
      { param: 'BDC_BODY → IKF_ENABLE', value: 'IKF_ALLE_SITZE' },
    ],
  },
  {
    id: 'ex_seat_distr',
    block: 'HU_MGU / BDC / SM2',
    category: { ru: 'MGU — Головное устройство', en: 'MGU — Head Unit' },
    title: { ru: 'Распределение подогрева сидений', en: 'Seat Heating Distribution' },
    steps: [
      {
        param: 'HU_MGU → HVAC_SEATHEAT_DISTR_FRONT',
        value: '-',
        desc: {
          ru: 'Параметр распределения (G20: только водитель)',
          en: 'Distribution parameter (G20: driver only)',
        },
      },
      { param: 'BDC_BODY → SITZHEIZUNG_FRONT_SCHICHTUNG', value: 'aktive' },
      { param: 'SM2 → SHZ_TYP', value: 'Werte 02' },
    ],
  },
  {
    id: 'ex_vehicle_color',
    block: 'MGU',
    category: { ru: 'MGU — Головное устройство', en: 'MGU — Head Unit' },
    title: { ru: 'Цвет авто и комплектация', en: 'Vehicle Color and Trim' },
    steps: [
      {
        param: 'MGU → VEHICLE_COLOR',
        value: 'код цвета из списка',
        desc: { ru: 'Визуальный цвет авто в системе', en: 'Visual vehicle color in the system' },
      },
      {
        param: 'MGU → TRIM_LINE',
        value: 'комплектация',
        desc: { ru: 'Отображаемая комплектация', en: 'Displayed trim level' },
      },
    ],
  },
  // ── KOMBI ────────────────────────────────────────────────────────────────
  {
    id: 'ex_kombi_color',
    block: 'KOMBI',
    category: { ru: 'KOMBI — Приборная панель', en: 'KOMBI — Instrument Cluster' },
    title: {
      ru: 'Цвет приборки день/ночь (F-серия, не LED)',
      en: 'Cluster Color Day/Night (F-series, non-LED)',
    },
    steps: [
      {
        param: 'KOMBI → HINTERGRUND_FARBE_NACHT',
        desc: { ru: 'Цвет ночного режима', en: 'Night mode color' },
        options: [
          { value: 'Grau', label: { ru: 'Серый', en: 'Grey' } },
          { value: 'Orange', label: { ru: 'Оранжевый', en: 'Orange' } },
        ],
      },
      {
        param: 'KOMBI → HINTERGRUND_FARBE_TAG',
        desc: { ru: 'Цвет дневного режима', en: 'Day mode color' },
        options: [
          { value: 'Grau', label: { ru: 'Серый', en: 'Grey' } },
          { value: 'Orange', label: { ru: 'Оранжевый', en: 'Orange' } },
        ],
      },
    ],
  },
  {
    id: 'ex_kombi_skin',
    block: 'KOMBI',
    category: { ru: 'KOMBI — Приборная панель', en: 'KOMBI — Instrument Cluster' },
    title: {
      ru: 'Скин LED приборки (M / Alpina / стандарт)',
      en: 'LED Cluster Skin (M / Alpina / Standard)',
    },
    steps: [
      {
        param: 'KOMBI → GLOBAL_LAYOUT_VARIANTE',
        options: [
          {
            value: 'M',
            label: { ru: 'M-стиль (увеличенная шкала)', en: 'M-style (enlarged scale)' },
          },
          { value: 'Alpina', label: { ru: 'Alpina', en: 'Alpina' } },
          { value: 'standard', label: { ru: 'Заводской', en: 'Standard' } },
        ],
      },
      {
        param: 'KOMBI4 → AG_MPA_MSP_VIEW',
        desc: { ru: 'Только для M-скина', en: 'M-skin only' },
        options: [
          {
            value: 'mpa_ansicht_260_skala',
            label: { ru: 'Спидометр до 260 км/ч', en: 'Speedometer up to 260 km/h' },
          },
          {
            value: 'mpa_ansicht_330_skala',
            label: { ru: 'Спидометр до 330 км/ч', en: 'Speedometer up to 330 km/h' },
          },
        ],
      },
    ],
  },
  {
    id: 'ex_welcome_screen',
    block: 'KOMBI',
    category: { ru: 'KOMBI — Приборная панель', en: 'KOMBI — Instrument Cluster' },
    title: {
      ru: 'Экран приветствия на приборной панели',
      en: 'Welcome Screen on Instrument Cluster',
    },
    steps: [
      {
        param: 'KOMBI → WELCOME_SCREEN_ENABLE',
        value: 'activ',
        desc: { ru: 'Приветствие при запуске', en: 'Welcome screen at startup' },
      },
      {
        param: 'KOMBI → GOODBYE_SCREEN',
        value: 'activ',
        desc: { ru: 'Экран прощания при выключении', en: 'Goodbye screen at shutdown' },
      },
    ],
  },
  {
    id: 'ex_speedo_backlight',
    block: 'KOMBI',
    category: { ru: 'KOMBI — Приборная панель', en: 'KOMBI — Instrument Cluster' },
    title: { ru: 'Постоянная подсветка спидометра', en: 'Permanent Speedometer Backlight' },
    steps: [
      {
        param: 'KOMBI → M_TAG_SKALENBELEUCHTUNG',
        value: 'aktiv',
        desc: { ru: 'Шкала постоянно подсвечена', en: 'Scale backlight always on' },
      },
    ],
  },
  {
    id: 'ex_digital_speed',
    block: 'KOMBI',
    category: { ru: 'KOMBI — Приборная панель', en: 'KOMBI — Instrument Cluster' },
    title: { ru: 'Цифровая скорость в БК и спидометре', en: 'Digital Speed in BC and Speedometer' },
    steps: [
      {
        param: 'KOMBI → 3000 → BC_DIGITAL_V',
        value: 'aktiv',
        desc: {
          ru: 'Цифровая скорость в бортовом компьютере',
          en: 'Digital speed in board computer',
        },
      },
      {
        param: 'KOMBI → BC_DIGITAL_V_KORREKTUR',
        value: 'aktiv',
        desc: { ru: 'Корректировка значения', en: 'Speed value correction' },
      },
      {
        param: 'KOMBI → DIGIT_GESCHW_BEHOERDE_ENABLE',
        value: 'aktive',
        desc: {
          ru: 'Крупная цифровая скорость (базовая приборка)',
          en: 'Large digital speed (base cluster)',
        },
      },
      {
        param: 'KOMBI → DIGIT_GESCHW_ENABLE',
        value: 'anzeige_kmh',
        desc: { ru: 'Постоянная цифровая скорость', en: 'Persistent digital speed display' },
      },
    ],
  },
  {
    id: 'ex_speed_updaterate',
    block: 'KOMBI',
    category: { ru: 'KOMBI — Приборная панель', en: 'KOMBI — Instrument Cluster' },
    title: { ru: 'Частота обновления цифровой скорости', en: 'Digital Speed Update Rate' },
    steps: [
      {
        param: 'KOMBI → DIGIT_GESCHW_UPDATERATE',
        value: '2 (вместо 5)',
        desc: {
          ru: 'Обновление каждые 200мс вместо 500мс',
          en: 'Update every 200ms instead of 500ms',
        },
      },
    ],
  },
  {
    id: 'ex_kombi_logo',
    block: 'KOMBI',
    category: { ru: 'KOMBI — Приборная панель', en: 'KOMBI — Instrument Cluster' },
    title: { ru: 'Логотип M в спортивном режиме', en: 'M Logo in Sport Mode' },
    steps: [
      {
        param: 'KOMBI → LOGO_SCHRIFTZUG',
        value: 'msp_logo',
        desc: {
          ru: 'M-логотип во всех режимах (LED приборка)',
          en: 'M logo in all modes (LED cluster)',
        },
      },
    ],
  },
  {
    id: 'ex_sport_color_kombi',
    block: 'KOMBI',
    category: { ru: 'KOMBI — Приборная панель', en: 'KOMBI — Instrument Cluster' },
    title: { ru: 'Серый цвет приборки в Sport-режиме', en: 'Grey Cluster Color in Sport Mode' },
    steps: [
      {
        param: 'KOMBI → MPA_MSP_VIEW_ENABLE',
        value: 'grau_weiss',
        desc: { ru: 'Для полу-LED приборки', en: 'For semi-LED cluster' },
      },
    ],
  },
  {
    id: 'ex_fuel_scale',
    block: 'KOMBI',
    category: { ru: 'KOMBI — Приборная панель', en: 'KOMBI — Instrument Cluster' },
    title: {
      ru: 'Шкала расходометра 15 / 20 / 30 л/100км',
      en: 'Fuel Consumption Scale: 15 / 20 / 30 L/100km',
    },
    steps: [
      {
        param: 'KOMBI → HMI_SVA_SKALA',
        desc: {
          ru: 'Полу-LED. На полной LED не работает.',
          en: 'Semi-LED only. Does not work on full LED cluster.',
        },
        options: [
          { value: '15l', label: { ru: '15 л/100км', en: '15 L/100km' } },
          { value: '20l', label: { ru: '20 л/100км (по умолчанию)', en: '20 L/100km (default)' } },
          { value: '30l', label: { ru: '30 л/100км', en: '30 L/100km' } },
        ],
      },
    ],
  },
  {
    id: 'ex_belt_icon',
    block: 'KOMBI4',
    category: { ru: 'KOMBI — Приборная панель', en: 'KOMBI — Instrument Cluster' },
    title: {
      ru: 'Отключение значка ремней (LED приборка)',
      en: 'Disable Seatbelt Icons (LED Cluster)',
    },
    steps: [
      {
        param: 'KOMBI4 → FOND_GURTSTATUS_ENABLE',
        value: 'inaktiv',
        desc: {
          ru: 'Убрать иконки ремней на LED приборной панели',
          en: 'Remove seatbelt icons from the LED instrument cluster',
        },
      },
    ],
  },
  // ── BDC ──────────────────────────────────────────────────────────────────
  {
    id: 'ex_lane_change',
    block: 'BDC / MGU / SAS2',
    category: { ru: 'BDC — Кузов', en: 'BDC — Body' },
    title: { ru: 'Lane Change Assist (Ассистент смены полосы)', en: 'Lane Change Assist' },
    steps: [
      {
        param: 'BDC_BODY → SPURWECHSEL_ASSISTENT',
        value: 'aktiv',
        desc: { ru: 'Активировать функцию', en: 'Activate the function' },
      },
      { param: 'HU_MGU → SPURWECHSELASSISTENT', value: 'gen_1' },
      { param: 'SAS2 → C_SWA_VORHANDEN', value: 'NR001_VORHANDEN' },
    ],
  },
  {
    id: 'ex_horn_lock',
    block: 'BDC',
    category: { ru: 'BDC — Кузов', en: 'BDC — Body' },
    title: {
      ru: 'Отключение двойного сигнала при закрытии (двигатель работает)',
      en: 'Disable Double Horn on Locking (Engine Running)',
    },
    steps: [{ param: 'BDC_BODY → 3040 VaMaster → VAM_HORN_AT_SECURE', value: '0' }],
  },
  {
    id: 'ex_sport_plus',
    block: 'BDC / MGU',
    category: { ru: 'BDC — Кузов', en: 'BDC — Body' },
    title: {
      ru: 'Режим Sport Plus / Comfort Plus / ECO Pro Plus',
      en: 'Sport Plus / Comfort Plus / ECO Pro Plus Modes',
    },
    steps: [
      {
        param: 'BDC_BODY → FesSportWorldMode1',
        value: 'Sportplus',
        desc: { ru: 'Sport Plus', en: 'Sport Plus' },
      },
      { param: 'NBT/MGU → Fes_Sport_Expert', value: 'aktive' },
      {
        param: 'BDC_BODY → FesComfortWorldMod1',
        value: 'comfortplus',
        desc: { ru: 'Comfort Plus', en: 'Comfort Plus' },
      },
      { param: 'NBT/MGU → FES_COMFORT_PLUS', value: 'aktive' },
      {
        param: 'BDC_BODY → FesEcoWorldMode1',
        value: 'ecoproplus',
        desc: { ru: 'ECO Pro Plus', en: 'ECO Pro Plus' },
      },
      { param: 'NBT/MGU → FES_ECO_PLUS', value: 'aktive' },
    ],
  },
  {
    id: 'ex_default_mode',
    block: 'BDC',
    category: { ru: 'BDC — Кузов', en: 'BDC — Body' },
    title: { ru: 'Режим вождения при запуске', en: 'Default Driving Mode at Startup' },
    steps: [
      {
        param: 'BDC_BODY → FesPiaDefaultLastUserMode',
        options: [
          { value: '01', label: { ru: 'Sport', en: 'Sport' } },
          { value: '02', label: { ru: 'Sport Plus', en: 'Sport Plus' } },
          { value: '03', label: { ru: 'Sport Individual', en: 'Sport Individual' } },
          { value: '04', label: { ru: 'Comfort (по умолчанию)', en: 'Comfort (default)' } },
          { value: '05', label: { ru: 'Comfort Plus', en: 'Comfort Plus' } },
          { value: '06', label: { ru: 'Comfort Individual', en: 'Comfort Individual' } },
          { value: '07', label: { ru: 'Eco Pro', en: 'Eco Pro' } },
          { value: '08', label: { ru: 'Eco Pro Plus', en: 'Eco Pro Plus' } },
          { value: '09', label: { ru: 'Eco Pro Individual', en: 'Eco Pro Individual' } },
          { value: '0A', label: { ru: 'Adaptive', en: 'Adaptive' } },
        ],
      },
    ],
  },
  {
    id: 'ex_mirror_angle',
    block: 'BDC',
    category: { ru: 'BDC — Кузов', en: 'BDC — Body' },
    title: { ru: 'Угол наклона зеркала при задней передаче', en: 'Mirror Tilt Angle in Reverse' },
    steps: [
      {
        param: 'BDC_BODY → ASP_BORDSTEINAUTOMATIK_DELTA',
        options: [
          { value: '5A', label: { ru: '90° (по умолчанию)', en: '90° (default)' } },
          { value: '50', label: { ru: '80°', en: '80°' } },
          { value: '46', label: { ru: '70°', en: '70°' } },
          { value: '3B', label: { ru: '59°', en: '59°' } },
        ],
      },
    ],
  },
  {
    id: 'ex_fog_strobe',
    block: 'BDC',
    category: { ru: 'BDC — Кузов', en: 'BDC — Body' },
    title: {
      ru: 'ПТФ-стробоскоп (откл. при включении дальнего)',
      en: 'Fog Light Strobe (Off with High Beam)',
    },
    steps: [
      {
        param: 'BDC / FRM → NSW_AUS_BEI_FL',
        value: 'aktive',
        desc: {
          ru: 'ПТФ отключаются при мигании дальним',
          en: 'Fog lights off when flashing high beam',
        },
      },
    ],
  },
  {
    id: 'ex_mirror_dim',
    block: 'BDC',
    category: { ru: 'BDC — Кузов', en: 'BDC — Body' },
    title: {
      ru: 'Чувствительность затемнения зеркал (тонировка)',
      en: 'Mirror Dimming Sensitivity (Tinted Glass)',
    },
    steps: [
      {
        param: 'ISP_HECKSCHEIBE',
        value: 'dunkel',
        desc: {
          ru: 'При наличии тонировки заднего стекла',
          en: 'When rear window tinting is present',
        },
      },
      {
        param: 'CODDT_00_SCAL_DIM_ECR_LIN',
        value: '-',
        desc: { ru: 'Внутренний канал', en: 'Inner channel' },
      },
      {
        param: 'CODDT_01_SCAL_DIM_ECR_LIN',
        value: '-',
        desc: { ru: 'Внешний канал', en: 'Outer channel' },
      },
    ],
  },
  {
    id: 'ex_comfort_entry',
    block: 'BDC',
    category: { ru: 'BDC — Кузов', en: 'BDC — Body' },
    title: {
      ru: 'Комфортная посадка (сиденье отъезжает назад)',
      en: 'Easy Entry (Seat Moves Back)',
    },
    steps: [
      {
        param: 'BDC_BODY → 30C0 → EINAUSSTIEGSHILFE_MODUS',
        value: 'Modus_FA_SLV',
        desc: { ru: 'Активировать функцию', en: 'Activate the function' },
      },
      {
        param: 'BDC_BODY → 30C0 → EINAUSSTIEGSHILFE_ENTFERNUNG',
        value: '32 (=50мм)',
        desc: { ru: 'Расстояние отъезда (hex)', en: 'Travel distance (hex)' },
      },
      {
        param: '3000 → SM_GLOBAL → EINAUSSTIEGSHILFE',
        value: 'MODUS_FA_SLV',
        desc: { ru: 'Альтернативный путь', en: 'Alternative path' },
      },
      { param: '3012 → EAN → EAH_VERFAHRWEG_SLV_PHYS', value: '00, 64' },
    ],
    note: {
      ru: 'Работает только при наличии памяти положений сиденья!',
      en: 'Only works if seat position memory is installed!',
    },
  },
  {
    id: 'ex_door_light',
    block: 'BDC',
    category: { ru: 'BDC — Кузов', en: 'BDC — Body' },
    title: {
      ru: 'Подсветка ручек дверей при задней передаче',
      en: 'Door Handle Lights When Reversing',
    },
    steps: [{ param: 'BDC Body → 3070 → OVT_BEI_REUCKFAHRLICHT', value: 'aktiv' }],
  },
  {
    id: 'ex_ac_key',
    block: 'BDC',
    category: { ru: 'BDC — Кузов', en: 'BDC — Body' },
    title: { ru: 'Включение кондиционера с ключа', en: 'A/C On via Remote Key' },
    steps: [
      {
        param: 'BDC Body → 30D0 → RC_DEFAULT_IDG_4TH_BUTTON_LONG',
        value: '07',
        desc: { ru: 'Долгое нажатие 4-й кнопки ключа', en: 'Long press of the 4th key button' },
      },
    ],
  },
  {
    id: 'ex_win_close_door',
    block: 'FEM_BODY / REM_BODY',
    category: { ru: 'BDC — Кузов', en: 'BDC — Body' },
    title: {
      ru: 'Закрытие окон без остановки при открытой двери',
      en: 'Window Closing Without Stop When Door Open',
    },
    steps: [
      {
        param: 'FEM_BODY → 3050 → FH_TUERAUF_STOP_MAUT',
        value: 'nicht_aktiv',
        desc: { ru: 'Передние стёкла', en: 'Front windows' },
      },
      {
        param: 'REM_BODY → 3050 → FH_TUERAUF_STOP_MAUT',
        value: 'nicht_aktiv',
        desc: { ru: 'Задние стёкла', en: 'Rear windows' },
      },
    ],
    note: {
      ru: 'Альтернативный путь: FRM → 3030 FRM_FH_PARAMETER → FH_TUER_AUF_STOP_MAUT',
      en: 'Alternative path: FRM → 3030 FRM_FH_PARAMETER → FH_TUER_AUF_STOP_MAUT',
    },
  },
  {
    id: 'ex_drl',
    block: 'BDC / FRM',
    category: { ru: 'BDC — Кузов', en: 'BDC — Body' },
    title: { ru: 'Включение/отключение ДХО', en: 'Enable/Disable Daytime Running Lights' },
    steps: [
      {
        param: 'BDC → DAYDRIVING_LIGHT',
        value: 'aktive',
        desc: { ru: 'Включить дневные ходовые огни', en: 'Enable daytime running lights' },
      },
      { param: 'BDC_BODY → Feature_4', value: 'aktiv', desc: { ru: 'Задние ДХО', en: 'Rear DRL' } },
      {
        param: 'HU_NBT_EVO → DAYDRIVING_LICHT',
        value: 'standart (Werte=02)',
        desc: { ru: 'Галка в ГУ для отключения', en: 'Checkbox in HU to allow disabling' },
      },
      {
        param: 'BDC_01 / firstCAFD(17BD) → FLC_AKTIV',
        value: 'Werte=01',
        desc: { ru: 'Всё выкл в положении "0"', en: 'All lights off in switch position "0"' },
      },
    ],
  },
  {
    id: 'ex_ambient_hex',
    block: 'BDC',
    category: { ru: 'BDC — Кузов', en: 'BDC — Body' },
    title: {
      ru: 'Кастомный цвет подсветки салона (HEX)',
      en: 'Custom Interior Ambient Color (HEX)',
    },
    steps: [
      {
        param: 'BDC_BODY → 360A → LIC_LCI_COLOR_LIBRARY_DATA',
        options: [
          { value: '90, E0, 90', label: { ru: 'Белый', en: 'White' } },
          { value: 'D7, 6E, 14', label: { ru: 'Бронза', en: 'Bronze' } },
          { value: '93, 1A, 01', label: { ru: 'Оранжевый', en: 'Orange' } },
          { value: '00, 20, FE', label: { ru: 'Синий', en: 'Blue' } },
          { value: '10, FE, 32', label: { ru: 'Зелёный', en: 'Green' } },
          { value: '78, 3C, FE', label: { ru: 'Сиреневый', en: 'Violet' } },
        ],
      },
      {
        param: 'BDC_BODY → 360D → LIC_LCI_COLOR_PROFILES_DATA',
        value: 'пары цветов',
        desc: {
          ru: 'Сочетание контурного и нижнего: 00=белый, 01=бронза, 02=оранж, 03=синий...',
          en: 'Contour + lower color pairs: 00=white, 01=bronze, 02=orange, 03=blue...',
        },
      },
    ],
    note: {
      ru: 'G-серия. Изменение основного цвета не меняет название в iDrive и не влияет на лампы для чтения.',
      en: 'G-series. Changing the main color does not update the iDrive name or affect reading lights.',
    },
  },
  // ── FRM ──────────────────────────────────────────────────────────────────
  {
    id: 'ex_frm_drl',
    block: 'FRM',
    category: { ru: 'FRM — Освещение', en: 'FRM — Lighting' },
    title: {
      ru: 'Режимы работы ДХО (передние/задние, EU/USA)',
      en: 'DRL Mode (Front/Rear, EU/USA)',
    },
    steps: [
      {
        param: 'FRM → DRL_MODUS',
        options: [
          { value: 'drl_s', label: { ru: 'США — передние + задние', en: 'USA — front + rear' } },
          { value: 'tfl_s', label: { ru: 'EU — передние + задние', en: 'EU — front + rear' } },
          {
            value: 'drl_s_ohne_sl',
            label: { ru: 'США — только передние', en: 'USA — front only' },
          },
          { value: 'tfl_s_ohne_sl', label: { ru: 'EU — только передние', en: 'EU — front only' } },
        ],
      },
    ],
  },
  {
    id: 'ex_corner_light',
    block: 'FRM',
    category: { ru: 'FRM — Освещение', en: 'FRM — Lighting' },
    title: {
      ru: 'Адаптивное освещение поворотов через ПТФ',
      en: 'Adaptive Cornering Lights via Fog Lights',
    },
    steps: [
      { param: 'FRM → Lamp_map_para_satz_01 → BV_F025_WERT02_Corneringlight-UBER-NSW', value: '-' },
      { param: 'FRM → ALC_AFS_ENABLE', value: 'aktiv' },
      {
        param: 'FRM → U_EFF_CL',
        options: [
          { value: 'FF', label: { ru: 'LED фары', en: 'LED headlights' } },
          { value: 'wert_07__13,0V=82', label: { ru: 'Галоген', en: 'Halogen' } },
        ],
      },
    ],
    note: {
      ru: 'Работает только в режиме AUTO в тёмное время суток. Не на всех авто.',
      en: 'Only active in AUTO mode at nighttime. Not available on all vehicles.',
    },
  },
  // ── KAFAS ────────────────────────────────────────────────────────────────
  {
    id: 'ex_traffic_jam',
    block: 'KAFAS / ICM',
    category: { ru: 'KAFAS — Ассистенты', en: 'KAFAS — Driver Assistance' },
    title: {
      ru: 'Traffic Jam Assist (ассистент в пробках, до 99 км/ч)',
      en: 'Traffic Jam Assist (up to 99 km/h)',
    },
    steps: [
      {
        param: 'KAFAS → 3020 → ROAD_EDGE_WARNING_ENABLED',
        value: 'DETECTION_FOR_GRASS_EDGE_AND_CURB_STONE',
        desc: { ru: 'Обнаружение обочины и бордюров', en: 'Detect road edges and curbs' },
      },
      {
        param: 'ICM → 3000 → C_STA_EINSCHRAENKUNG',
        value: 'KEINE EINSCHRAENKUNG',
        desc: { ru: 'Нет ограничений (режим полигон)', en: 'No restrictions (polygon mode)' },
      },
      {
        param: 'ICM → 3000 → C_QalcRel_v_Tacho_aktiv_kmh',
        value: '63 (hex = 99 км/ч)',
        desc: { ru: 'Если 63 недоступно → 3C (60 км/ч)', en: 'If 63 unavailable → 3C (60 km/h)' },
      },
      {
        param: 'KAFAS2 → 3100 → TRAFFIC_JAM_T_MIN',
        value: '00, 59 (default)',
        desc: {
          ru: 'Время до отключения без рук на руле',
          en: 'Time before hands-off deactivation',
        },
      },
      {
        param: 'KAFAS2 → 3100 → TRAFFIC_JAM_V_STAU',
        value: '60 (default)',
        desc: { ru: 'Порог скорости «пробка»', en: 'Traffic jam speed threshold' },
      },
    ],
  },
  {
    id: 'ex_sli_kafas',
    block: 'HU_NBT / KOMBI',
    category: { ru: 'KAFAS — Ассистенты', en: 'KAFAS — Driver Assistance' },
    title: { ru: 'Активация Speed Limit Info (SLI)', en: 'Enable Speed Limit Info (SLI)' },
    steps: [
      { param: 'HU_NBT → 3001 EXBOX → Speedlimit_Info', value: 'active' },
      { param: 'KOMBI → 3008 PIA_Einheiten → KI_PIA_Speed_Limit', value: 'active' },
      { param: 'KOMBI → 3008 PIA_Einheiten → HUD_PIA_Speed_Lim', value: 'active' },
      {
        param: 'KOMBI → 3000 Anzeige_Konfiguration → SPEED_LIMIT_GENERATION',
        value: 'sli_gen2_npi',
      },
    ],
  },
  {
    id: 'ex_ldw_speed',
    block: 'KAFAS',
    category: { ru: 'KAFAS — Ассистенты', en: 'KAFAS — Driver Assistance' },
    title: {
      ru: 'Порог активации LDW (Lane Departure Warning)',
      en: 'LDW Activation Speed (Lane Departure Warning)',
    },
    steps: [
      {
        param: 'KAFAS → порог активации LDW',
        value: '55 км/ч (вместо 70)',
        desc: {
          ru: 'Скорость активации предупреждения о выходе из полосы',
          en: 'Activation speed for lane departure warning',
        },
      },
    ],
  },
  // ── HKL ──────────────────────────────────────────────────────────────────
  {
    id: 'ex_trunk_nodelay',
    block: 'HKFM / HKL',
    category: { ru: 'HKL — Багажник', en: 'HKL — Tailgate' },
    title: { ru: 'Закрытие багажника без задержки', en: 'Tailgate Closing Without Delay' },
    steps: [
      { param: 'HKL_ROCKERSWITCHPOS2_LONGPRESS_CLOSE', value: '00' },
      { param: 'HKL_ROCKERSWITCHPOS2_DELAY_CLOSE', value: '00, 00' },
      { param: 'HKL_REMOTECONTROLLIFTGATEBUTTON_LONGPRESS_CLOSE', value: '00' },
      { param: 'HKL_REMOTECONTROLLIFTGATEBUTTON_DELAY_CLOSE', value: '00, 00' },
    ],
  },
  {
    id: 'ex_trunk_comfort',
    block: 'HKL',
    category: { ru: 'HKL — Багажник', en: 'HKL — Tailgate' },
    title: {
      ru: 'Комфортное открытие/закрытие багажника с ключа',
      en: 'Convenient Tailgate Open/Close via Remote',
    },
    steps: [
      {
        param: 'HKL → KOMFORT_OEFFNEN_HKL',
        value: 'aktiv',
        desc: { ru: 'Долгое нажатие «открыть» на ключе', en: 'Long press of "open" on remote' },
      },
      {
        param: 'HKL → KOMFORT_SCHLIESSEN_HKL',
        value: 'aktiv',
        desc: { ru: 'Долгое нажатие «закрыть» на ключе', en: 'Long press of "close" on remote' },
      },
      {
        param: 'HKL → FUNKTION_FBD_SCHLIESSEN_2',
        value: 'aktiv',
        desc: { ru: '1 нажатие ключа для закрытия', en: '1 press to close via remote' },
      },
      {
        param: 'HKL → FUNKTION_TOEHKI',
        value: 'aktiv',
        desc: { ru: 'Закрыть с кнопки у ноги водителя', en: 'Close via driver footwell button' },
      },
    ],
  },
  {
    id: 'ex_trunk_soft',
    block: 'HKFM',
    category: { ru: 'HKL — Багажник', en: 'HKL — Tailgate' },
    title: {
      ru: 'Плавное закрытие багажника (X5 E70/F15)',
      en: 'Soft Tailgate Close (X5 E70/F15)',
    },
    steps: [
      {
        param: 'DREZAL_SEGMENT_SCHL',
        value: '20,30,40,58,58,58,58,58,58',
        desc: { ru: 'Было: 36,40,40,40,40,40,40,40,40', en: 'Was: 36,40,40,40,40,40,40,40,40' },
      },
    ],
    note: {
      ru: 'Багажник перед закрытием притормаживает и тихо прижимается доводчиком.',
      en: 'The tailgate slows down before closing and gently latches via the soft-close mechanism.',
    },
  },
  // ── HUD ──────────────────────────────────────────────────────────────────
  {
    id: 'ex_hud_m',
    block: 'CAPP / HUD',
    category: { ru: 'HUD — Проекционный дисплей', en: 'HUD — Head-Up Display' },
    title: { ru: 'Активация M-HUD', en: 'Activate M-HUD' },
    steps: [
      { param: 'CAPP → LMDRIVE', value: 'aktiv' },
      { param: 'CAPP → HUD_M', value: 'aktiv' },
      {
        param: 'HUD → M_SPORT_HUD',
        options: [
          { value: 'aktiv_automatik', label: { ru: 'Авто-переключение', en: 'Auto switch' } },
          {
            value: 'aktiv_handschalter',
            label: { ru: 'Ручное переключение', en: 'Manual switch' },
          },
        ],
      },
    ],
    note: {
      ru: 'В iDrive появится выбор M-HUD после изменения всех трёх параметров.',
      en: 'The M-HUD option will appear in iDrive after all three parameters are changed.',
    },
  },
  {
    id: 'ex_hud_blinker',
    block: 'HUD',
    category: { ru: 'HUD — Проекционный дисплей', en: 'HUD — Head-Up Display' },
    title: { ru: 'Указатели поворотов в HUD', en: 'Turn Signals in HUD' },
    steps: [
      {
        param: 'HUD → BLINKER_AUSSTATTUNG',
        value: 'aktiv',
        desc: {
          ru: 'Не работает с цифровой приборной панелью!',
          en: 'Does not work with the digital instrument cluster!',
        },
      },
    ],
  },
  // ── CIC ──────────────────────────────────────────────────────────────────
  {
    id: 'ex_cic_album',
    block: 'HU_CIC',
    category: { ru: 'CIC — Мультимедиа', en: 'CIC — Multimedia' },
    title: { ru: 'Крупные обложки альбомов (CIC)', en: 'Large Album Art (CIC)' },
    steps: [
      {
        param: 'HU_CIC → 3003 TELEFON_TELEMATIK_ONLINE → CDMM_USB_HMI',
        value: 'new (1)',
        desc: { ru: 'Как в новых машинах', en: 'Same as newer vehicles' },
      },
    ],
  },
  {
    id: 'ex_cic_logic7',
    block: 'HU_CIC',
    category: { ru: 'CIC — Мультимедиа', en: 'CIC — Multimedia' },
    title: { ru: 'Меню регулировки Logic 7 (CIC)', en: 'Logic 7 Adjustment Menu (CIC)' },
    steps: [{ param: 'HU_CIC → 3000 HMI → L7_SURROUND_CONFIG', value: 'aktiv / Werte=01' }],
  },
  {
    id: 'ex_cic_sport',
    block: 'HU_CIC / KOMBI',
    category: { ru: 'CIC — Мультимедиа', en: 'CIC — Multimedia' },
    title: {
      ru: 'Спортивные индикаторы мощности+момента (CIC)',
      en: 'Sport Power+Torque Indicators (CIC)',
    },
    steps: [
      { param: 'HU_CIC → 3000 HMI → EFF_DYN_SPORT_CID', value: 'aktiv (1)' },
      { param: 'KOMBI → 3008 PIA_Einheiten → DREHMOMENT', value: 'Nm (1)' },
      {
        param: 'KOMBI → 3008 PIA_Einheiten → LEISTUNG',
        options: [
          { value: 'PS (2)', label: { ru: 'Лошадиные силы', en: 'Horsepower (PS)' } },
          { value: 'kW (1)', label: { ru: 'Киловатты', en: 'Kilowatts (kW)' } },
        ],
      },
    ],
  },
  // ── xDrive ───────────────────────────────────────────────────────────────
  {
    id: 'ex_xdrive_menu',
    block: 'NBT',
    category: { ru: 'xDrive — Трансмиссия', en: 'xDrive — Drivetrain' },
    title: { ru: 'Меню xDrive (распределение момента)', en: 'xDrive Menu (Torque Distribution)' },
    steps: [
      { param: 'NBT → X_VIEW', value: 'activ' },
      { param: 'NBT → COMPASS', value: 'activ' },
      { param: 'NBT → MOMENTDISTRIBUTION_MENU', value: 'activ' },
      { param: 'NBT → X_VIEW_GRAPHIC_SLOP', value: 'trajectory1' },
      { param: 'NBT → X_VIEW_GRAPHIC_ROLL', value: 'trajectory1' },
    ],
  },
]
