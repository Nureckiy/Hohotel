﻿using System.Collections.Generic;
using Hohotel.Models.DataModels;

namespace Hohotel.Services
{
    public interface IDishService
    {
        IList<Dish> GetPopular(int count);

        IList<Dish> GetByCategoryName(string categoryName);

        Dish AddDish(Dish dish);

        Dish EditDish(Dish dish);

        void DeleteDish(int id);
    }
}
