﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hohotel.Models;
using Hohotel.Models.DataModels;

namespace Hohotel.Services
{
    public interface IRoomCategoryService
    {
        IList<PreviewCategory> GetRoomCategories();

        FullRoomCategory GetRoomCategoryById(int id);

        RoomCategory AddRoomCategory(RoomCategory category);

        RoomCategory EditRoomCategory(RoomCategory category);

        void DeleteRoomCategory(int id);

        IList<ItemInfo> GetCategoriesInfo();
    }
}
