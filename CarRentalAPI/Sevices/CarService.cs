using System.Collections.Generic;
using System.Threading.Tasks;
using CarRentalAPI.Models;
using CarRentalAPI.Data;
using Microsoft.EntityFrameworkCore;

namespace CarRentalAPI.Services
{
    public class CarService
    {
        private readonly CarContext _context;

        public CarService(CarContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Car>> GetAllCarsAsync()
        {
            return await _context.Cars.ToListAsync();
        }

        public async Task<Car> GetCarByIdAsync(int id)
        {
            return await _context.Cars.FindAsync(id);
        }

        public async Task<Car> CreateCarAsync(Car car)
        {
            _context.Cars.Add(car);
            await _context.SaveChangesAsync();
            return car;
        }

        public async Task<Car> UpdateCarAsync(int id, Car car)
        {
            var existingCar = await _context.Cars.FindAsync(id);
            if (existingCar == null) return null;

            existingCar.Make = car.Make;
            existingCar.Model = car.Model;
            existingCar.Year = car.Year;
            existingCar.RentalPrice = car.RentalPrice;

            await _context.SaveChangesAsync();
            return existingCar;
        }

        public async Task<bool> DeleteCarAsync(int id)
        {
            var car = await _context.Cars.FindAsync(id);
            if (car == null) return false;

            _context.Cars.Remove(car);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
