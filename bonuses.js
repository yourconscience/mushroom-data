// Бонусы игры ГРИБ. Подключается из index.html перед основным скриптом.
// chance: вероятность появления на платформе; dur: длительность эффекта в секундах.
const BONUSES={
  jet:   {icon:'🚀', color:'#4cc9f0', dur:4,  chance:0.07,
          quote:'ПАНЕЛЬКА НА ЛУНЕ, Я ВЗЛЕТАЮ 🚀',
          hud:'ДЖЕТПАК'},
  boost: {icon:'🏎',  color:'#ffd700', dur:5,  chance:0.08,
          quote:'НОВЫЙ КАДИЛЛАК, ГАЗ В ПОЛ 🏎',
          hud:'УСКОРЕНИЕ'},
  loot:  {icon:'💰', color:'#7CFC00', dur:0,  chance:0.10,
          quote:'GIMME THE LOOT +500 💰',
          hud:''},
};
