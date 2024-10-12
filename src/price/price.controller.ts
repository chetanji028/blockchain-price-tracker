import { Controller, Get, Post, Body } from '@nestjs/common';
import { PriceService } from './price.service';
import { CreateAlertDto } from './dto/create-alert.dto';

@Controller('price')
export class PriceController {
  constructor(private readonly priceService: PriceService) {}

  @Get('hourly')
  getHourlyPrices() {
    return this.priceService.getHourlyPrices();
  }

  @Post('alert')
  setPriceAlert(@Body() createAlertDto: CreateAlertDto) {
    return this.priceService.setPriceAlert(createAlertDto);
  }
}
