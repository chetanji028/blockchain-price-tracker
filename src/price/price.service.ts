import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThanOrEqual } from 'typeorm';
import { Price } from './price.entity';
import axios from 'axios';
import * as nodemailer from 'nodemailer';
import { CreateAlertDto } from './dto/create-alert.dto';

@Injectable()
export class PriceService {
  constructor(
    @InjectRepository(Price)
    private priceRepository: Repository<Price>,
  ) {}

  async getHourlyPrices() {
    const now = new Date();
    const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    return this.priceRepository.find({
      where: { timestamp: MoreThanOrEqual(oneDayAgo) }, // Change made here
      order: { timestamp: 'DESC' },
    });
  }

  async setPriceAlert(createAlertDto: CreateAlertDto) {
    // Implement alert logic and email notifications
  }

  async fetchAndSavePrice(chain: string) {
    const apiUrl = chain === 'ethereum'
      ? 'https://api.moralis.io/v2/erc20/price'
      : 'https://api.moralis.io/v2/polygon/price';
    const priceResponse = await axios.get(apiUrl);
    const newPrice = this.priceRepository.create({
      chain,
      price: priceResponse.data.price,
    });
    await this.priceRepository.save(newPrice);
    return newPrice;
  }

  async sendAlertEmail(email: string, chain: string, price: number) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Price Alert for ${chain}`,
      text: `The price of ${chain} has reached ${price} USD.`,
    });
  }
}
