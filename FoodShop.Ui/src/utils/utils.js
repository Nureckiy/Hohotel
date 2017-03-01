export function mergeSelected(selected, newItem) {
  const index = selected.findIndex((item) => item.configurationId === newItem.configurationId);
  if (~index) {
    selected[index] = newItem;
  } else {
    selected.push(newItem);
  }
  return selected;
}

export function mergeGoods(selected, good) {
  let goodSelected = good.selected;
  if (Array.isArray(goodSelected)) {
    goodSelected = goodSelected.filter(x => x.number != 0);
  }
  if (goodSelected && goodSelected.length) {
    return includeGood(selected, good);
  } else {
    return excludeGood(selected, good);
  }
}

function includeGood(arr, good) {
  let index = arr.findIndex(x => x.Id === good.Id);
  if(~index) {
    arr[index] = good;
  } else {
    arr.push(good);
  }
  return arr;
}

function excludeGood(arr, good) {
  let index = arr.findIndex(x => x.Id === good.Id);
  if (~index) {
    arr.splice(index, 1);
  }
  return arr;
}

export function calculateTotal(goods) {
  let total = 0;
  goods.map(good =>
    total += calculateGoodTotal(good)
  );
  return total;
}

export function calculateGoodTotal(good) {
  let total = 0;
  good.selected.map((item) =>
    total += item.Price * item.number
  );
  return total;
}

export function renderNumberOptions(number) {
  let options = [];
  for(let i = 0; i < number; i++) {
    options.push({
      value: i,
      text: i
    });
  }
  return options;
}

export function changeConfiguration(goods, configuration) {
  goods.map(good => {
    const index = good.selected.findIndex(x => x.Id === configuration.Id);
    if (~index) {
      if (configuration.number) {
        good.selected[index] = configuration;
      } else {
        good.selected.splice(index, 1);
      }
    }
  });
  return goods;
}

export function findNumber(selected, id) {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i].Id === id)
      return selected[i].number;
  }
  return 0;
}

export function separateSelected(goods) {
  let configs = [];
  goods.map((good) => configs = configs.concat(good.selected));
  return configs;
}

export function findSelectedConfigurations(selected, configurations) {
  let result = [];
  configurations.map((item) => {
    let overlap = selected.find((meal) => meal.configurationId === item.Id);
    if (overlap) {
      result.push(overlap);
    }
  });
  return result;
}
export function getProfile() {
  return JSON.parse(localStorage.getItem('profile'));
}
export function getProfileItem(itemName) {
  const profile = getProfile();
  if (profile) {
    return profile[itemName];
  }
}

export function getProfileItemFromMetadata(itemName) {
  const profile = getProfile();
  if (profile && profile.user_metadata)
    return profile.user_metadata[itemName];
}

export function mergeSubstitutions(selected, id) {
  const index = selected.indexOf(id);
  if (~index) {
    selected.splice(index, 1);
  } else {
    selected.push(id);
  }
  return selected;
}

export function makeConfigurationsList(selected) {
  let res = {};

  selected.forEach(item =>
    item.Configurations.forEach(configuration =>
      res[configuration.Id] = configuration.number
    )
  );

  return res;
}

