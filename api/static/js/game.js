const customDeck = [
  { value: '遍地黄金', power: '+2黄金' },
  { value: '遍地黄金', power: '+2黄金' },
  { value: '遍地黄金', power: '+2黄金' },
  { value: '飞天炸弹', power: '受到对方武器远程攻击' },
  { value: '飞天炸弹', power: '受到对方武器远程攻击' },
  { value: '飞天炸弹', power: '受到对方武器远程攻击' },
  { value: '飞天炸弹', power: '受到对方武器远程攻击' },
  { value: '飞天炸弹', power: '受到对方武器远程攻击' },
  { value: '顿悟', power: '唤醒角色觉醒技能' },
  { value: '顿悟', power: '唤醒角色觉醒技能' },
  { value: '骤风急雨', power: '移动0-1步并 +2 水资源' },
  { value: '骤风急雨', power: '移动0-1步并 +2 水资源' },
  { value: '迎风冒雪', power: '移动0-1步并 +2 水资源' },
  { value: '迎风冒雪', power: '移动0-1步并 +2 水资源' },
  { value: '迎风冒雪', power: '移动0-1步并 +2 水资源' },
  { value: '断粮', power: '食物和水各损失两个' },
  { value: '断粮', power: '食物和水各损失两个' },
  { value: '断粮', power: '食物和水各损失两个' },
  { value: '断粮', power: '食物和水各损失两个' },
  { value: '断粮', power: '食物和水各损失两个' },
  { value: '断粮', power: '食物和水各损失两个' },
  { value: '天有不测风云', power: '失去两叠货物' },
  { value: '天有不测风云', power: '失去两叠货物' },
  { value: '人有旦夕祸福', power: '失去两叠货物' },
  { value: '人有旦夕祸福', power: '失去两叠货物' },
  { value: '不翼而飞', power: '失去一叠货物' },
  { value: '不翼而飞', power: '失去一叠货物' },
  { value: '劫匪来临', power: '损失两个货物和两个金币' },
  { value: '劫匪来临', power: '损失两个货物和两个金币' },
  { value: '劫匪来临', power: '损失两个货物和两个金币' },
  { value: '劫匪来临', power: '损失两个货物和两个金币' },
  { value: '劫匪来临', power: '损失两个货物和两个金币' },
  { value: '内部矛盾', power: '减去一个保镖' },
  { value: '内部矛盾', power: '减去一个保镖' },
  { value: '内部矛盾', power: '减去一个保镖' },
  { value: '加餐', power: '+2食物' },
  { value: '加餐', power: '+2食物' },
  { value: '加餐', power: '+2食物' },
  { value: '加餐', power: '+2食物' },
  { value: '加餐', power: '+2食物' },
  { value: '珠沉玉没', power: '丢失两个商品' },
  { value: '珠沉玉没', power: '丢失两个商品' },
  { value: '珠沉玉没', power: '丢失两个商品' },
  { value: '珠沉玉没', power: '丢失两个商品' },
  { value: '量子穿越', power: '穿越到地图上任意地点' },
  { value: '量子穿越', power: '穿越到地图上任意地点' },
  { value: '漠中清泉', power: '+2水' },
  { value: '漠中清泉', power: '+2水' },
  { value: '漠中清泉', power: '+2水' },
  { value: '漠中清泉', power: '+2水' },
  { value: '漠中清泉', power: '+2水' },
  { value: '鸿运当头', power: '获得2份起始物资' },
  { value: '鸿运当头', power: '获得2份起始物资' },
  { value: '鸿运当头', power: '获得2份起始物资' },
  { value: '收之桑榆', power: '获得2份起始物资' },
  { value: '收之桑榆', power: '获得2份起始物资' },
  { value: '收之桑榆', power: '获得2份起始物资' },
  { value: '收之桑榆', power: '获得2份起始物资' },
  { value: '石沉大海', power: '丢失两个商品' },
  { value: '石沉大海', power: '丢失两个商品' },
  { value: '石沉大海', power: '丢失两个商品' },
  { value: '珠沉玉没', power: '丢失两个商品' },
  { value: '珠沉玉没', power: '丢失两个商品' },
  { value: '人困马乏', power: '移动0-1步（此回合马技能失效）' },
  { value: '人困马乏', power: '移动0-1步（此回合马技能失效）' },
  { value: '人困马乏', power: '移动0-1步（此回合马技能失效）' },
  { value: '寸步难行', power: '移动0-1步' },
  { value: '寸步难行', power: '移动0-1步' },
  { value: '寸步难行', power: '移动0-1步' },
  { value: '逆水行舟', power: '移动0-2步' },
  { value: '逆水行舟', power: '移动0-2步' },
  { value: '逆水行舟', power: '移动0-2步' },
  { value: '鞍马劳顿', power: '移动0-3步（次回合马技能 +2移动上限）' },
  { value: '鞍马劳顿', power: '移动0-3步（次回合马技能 +2移动上限）' },
  { value: '鞍马劳顿', power: '移动0-3步（次回合马技能 +2移动上限）' },
  { value: '飞沙走石', power: '移动0-3步并 -1 体力值' },
  { value: '飞沙走石', power: '移动0-3步并 -1 体力值' },
  { value: '风平浪静', power: '移动0-4步' },
  { value: '风尘仆仆', power: '移动0-4步' },
  { value: '风淡云轻', power: '移动0-5步' },
  { value: '一路平安', power: '移动0-5步' },
  { value: '风淡云轻', power: '移动0-5步' },
  { value: '乘风破浪', power: '移动0-6步' },
  { value: '只争朝夕', power: '移动0-6步' },
  { value: '江洋大盗', power: '失去一半白银' },
  { value: '江洋大盗', power: '失去一半白银' },
  { value: '和气生财', power: '所有人获得3白银' },
  { value: '和气生财', power: '所有人获得3白银' },
  { value: '礼尚往来', power: '与任意玩家交换两个商品' },
  { value: '礼尚往来', power: '与任意玩家交换两个商品' },
  { value: '礼尚往来', power: '与任意玩家交换两个商品' },
  { value: '礼尚往来', power: '与任意玩家交换两个商品' },
  { value: '礼尚往来', power: '与任意玩家交换两个商品' },
  { value: '破财免灾', power: '失去所有白银' },
  { value: '破财免灾', power: '失去所有白银' },
  { value: '破财免灾', power: '失去所有黄金' },
  { value: '礼尚往来', power: '与任意玩家交换两个商品' },
  { value: '楚弓楚得', power: '如果之前自己或同样阵营丢失货物，则可获得此货物' },
  { value: '楚弓楚得', power: '如果之前自己或同样阵营丢失货物，则可获得此货物' },
  { value: '楚弓楚得', power: '如果之前自己或同样阵营丢失货物，则可获得此货物' },
  { value: '楚弓楚得', power: '如果之前自己或同样阵营丢失货物，则可获得此货物' },
  { value: '失而复得', power: '如果之前自己丢失货物，则可获得此货物' },
  { value: '失而复得', power: '如果之前自己丢失货物，则可获得此货物' },
  { value: '失而复得', power: '如果之前自己丢失货物，则可获得此货物' },
  { value: '铁匠优惠', power: '此回合所有武器与防具半价' },
  { value: '铁匠优惠', power: '此回合所有武器与防具半价' },
];

// Function to generate a cryptographically secure random integer in a specified range
function secureRandomInRange(min, max) {
  const range = max - min + 1;
  const byteArray = new Uint8Array(range);
  let maxValid = 256 - (256 % range);

  // Rejection sampling to get random integer within the range
  let randomValue;
  do {
    window.crypto.getRandomValues(byteArray);
    randomValue = byteArray[0];
  } while (randomValue >= maxValid);

  return min + (randomValue % range);
}

function resetCoin() {
  const goldElements = document.querySelectorAll('.gold');
  const silverElements = document.querySelectorAll('.silver');

  goldElements.forEach((element) => {
    element.textContent = '10';
  });

  silverElements.forEach((element) => {
    element.textContent = '10';
  });
}

// Function to update the gold and silver values for a player
function updateCoin(playerId, type, action) {
  const element = document.querySelector(`.player${playerId} .${type}`);
  let value = parseInt(element.textContent);

  if (action === 'add') {
    value += 1;
  } else if (action === 'minus') {
    value -= 1;
  }

  if (value < 0) value = 0;

  element.textContent = value.toString();
}

function updateFoodWater(playerId, type, action) {
  const element = document.querySelector(`.player${playerId} .${type}`);
  let value = parseInt(element.textContent);

  if (action === 'add') {
    value += 1;
  } else if (action === 'minus') {
    value -= 1;
  }

  if (value < 0) value = 0;

  element.textContent = value.toString();
}

// Add event listeners to the plus and minus buttons for each player
const plusButtonsGold = document.querySelectorAll('.add-minus[data-type="gold"][data-action="add"');
const minusButtonsGold = document.querySelectorAll('.add-minus[data-type="gold"][data-action="minus"');
const plusButtonsSilver = document.querySelectorAll('.add-minus[data-type="silver"][data-action="add"');
const minusButtonsSilver = document.querySelectorAll('.add-minus[data-type="silver"][data-action="minus"');
const plusButtonsFood = document.querySelectorAll('.add-minus[data-type="food"][data-action="add"]');
const minusButtonsFood = document.querySelectorAll('.add-minus[data-type="food"][data-action="minus"]');
const plusButtonsWater = document.querySelectorAll('.add-minus[data-type="water"][data-action="add"]');
const minusButtonsWater = document.querySelectorAll('.add-minus[data-type="water"][data-action="minus"]');

plusButtonsGold.forEach((button) => {
  button.addEventListener('click', () => {
    const playerId = button.dataset.player;
    const type = button.dataset.type;
    const action = 'add';
    updateFoodWater(playerId, type, action);
  });
});

minusButtonsGold.forEach((button) => {
  button.addEventListener('click', () => {
    const playerId = button.dataset.player;
    const type = button.dataset.type;
    const action = 'minus';
    updateFoodWater(playerId, type, action);
  });
});

plusButtonsSilver.forEach((button) => {
  button.addEventListener('click', () => {
    const playerId = button.dataset.player;
    const type = button.dataset.type;
    const action = 'add';
    updateFoodWater(playerId, type, action);
  });
});

minusButtonsSilver.forEach((button) => {
  button.addEventListener('click', () => {
    const playerId = button.dataset.player;
    const type = button.dataset.type;
    const action = 'minus';
    updateFoodWater(playerId, type, action);
  });
});

plusButtonsFood.forEach((button) => {
  button.addEventListener('click', () => {
    const playerId = button.dataset.player;
    const type = button.dataset.type;
    const action = 'add';
    updateFoodWater(playerId, type, action);
  });
});

minusButtonsFood.forEach((button) => {
  button.addEventListener('click', () => {
    const playerId = button.dataset.player;
    const type = button.dataset.type;
    const action = 'minus';
    updateFoodWater(playerId, type, action);
  });
});

plusButtonsWater.forEach((button) => {
  button.addEventListener('click', () => {
    const playerId = button.dataset.player;
    const type = button.dataset.type;
    const action = 'add';
    updateFoodWater(playerId, type, action);
  });
});

minusButtonsWater.forEach((button) => {
  button.addEventListener('click', () => {
    const playerId = button.dataset.player;
    const type = button.dataset.type;
    const action = 'minus';
    updateFoodWater(playerId, type, action);
  });
});

// Fisher-Yates cryptographically secure shuffle
function secureShuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = secureRandomInRange(0, i);
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

let currentIndex = 0; // Keep track of the current card index in the circular queue

function drawCard() {
  if (customDeck.length > 0) {
    const drawnCard = customDeck[currentIndex];
    const cardElement = document.getElementById('drawn-card');

    // Apply the "flipped" class to the card to trigger the flip animation
    cardElement.classList.add('flipped');

    setTimeout(() => {
      document.getElementById('card-value').textContent = drawnCard.value;
      document.getElementById('card-power').textContent = drawnCard.power;
      cardElement.classList.remove('flipped');
    }, 500); // Remove the "flipped" class after half a second to complete the flip animation

    secureShuffleDeck(customDeck);
    currentIndex = (currentIndex + 1) % customDeck.length;
  } else {
    document.getElementById('card-value').textContent = '牌被摸完了……';
    document.getElementById('card-power').textContent = '游戏结束……';
  }
}

secureShuffleDeck(customDeck);
resetCoin();

const drawButtons = document.getElementsByClassName('draw-button');
for (let i = 0; i < drawButtons.length; i++) {
  drawButtons[i].addEventListener('click', drawCard);
}