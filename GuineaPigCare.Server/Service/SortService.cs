﻿using GuineaPigCare.Server.Exceptions;
using GuineaPigCare.Server.Interfaces;
using GuineaPigCare.Server.Models;

namespace GuineaPigCare.Server.Service
{
    public class SortService : ISortService
    {
        public ProductResult SortByName(List<ProductDto> products, PaginationDto paginationDto)
        {
            if(paginationDto.PageNumber < 1)
            {
                throw new BadRequestException("Numer strony musi być większy od zera");
            }
            if(paginationDto.PageSize < 1 || paginationDto.PageSize > 100)
            {
                throw new BadRequestException("Rozmiar strony musi mieścić się w zakresie 1-100");
            }
            int baseQueryCount = products.Count();

            List<ProductDto> sortedProducts = products.OrderBy(x => x.Name).Skip(paginationDto.PageSize * (paginationDto.PageNumber - 1)).Take(paginationDto.PageSize).ToList();

            ProductResult allProducts = new ProductResult();

            allProducts.Products = sortedProducts;
            allProducts.Counter = baseQueryCount;

            return allProducts;
        }
    }
}
