using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using CarRentalAPI.Models;
using CarRentalAPI.Services;

namespace CarRentalAPI.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class CarController : ControllerBase
    {
        private readonly CarService _carService;

        public CarController(CarService carService)
        {
            _carService = carService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Car>>> GetAllCars()
        {
            return Ok(await _carService.GetAllCarsAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Car>> GetCarById(int id)
        {
            var car = await _carService.GetCarByIdAsync(id);
            if (car == null) return NotFound();

            return Ok(car);
        }

        [HttpPost]
        public async Task<ActionResult<Car>> CreateCar([FromBody] Car car)
        {
            var newCar = await _carService.CreateCarAsync(car);
            return CreatedAtAction(nameof(GetCarById), new { id = newCar.Id }, newCar);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Car>> UpdateCar(int id, [FromBody] Car car)
        {
            var updatedCar = await _carService.UpdateCarAsync(id, car);
            if (updatedCar == null) return NotFound();

            return Ok(updatedCar);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteCar(int id)
        {
            var result = await _carService.DeleteCarAsync(id);
            if (!result) return NotFound();

            return NoContent();
        }
    }
}
