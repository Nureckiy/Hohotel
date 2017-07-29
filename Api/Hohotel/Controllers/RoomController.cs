﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hohotel.Models;
using Hohotel.Models.DataModels;
using Hohotel.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Hohotel.Controllers
{
    [Route("api/[controller]")]
    public class RoomController : Controller
    {
        private readonly IRoomService _service;

        public RoomController(IRoomService service)
        {
            _service = service;
        }

        // POST api/room/checkAvailability
        [HttpPost("CheckAvailability")]
        public bool CheckAvailability([FromBody]RoomBooking roomBooking)
        {
            return _service.IsAvailable(roomBooking);
        }

        // POST api/room
        [HttpPost]
        public IList<Room> Post([FromBody]RoomFilter filter)
        {
            return _service.Filter(filter);
        }

        // POST api/room/books
        [Authorize]
        [HttpPost("Book")]
        public void Book([FromBody]Booking booking)
        {
            _service.Book(booking, User.Identity.Name);
        }

        // GET api/room/active
        [Authorize]
        [HttpGet("Active")]
        public IList<string> Active()
        {
            return _service.GetActive(User.Identity.Name);
        }

        // POST api/room/bookings
        [Authorize]
        [HttpGet("bookings")]
        public IList<BookingView> GetBookings()
        {
            return _service.GetUserBookings(User.Identity.Name);
        }
    }
}