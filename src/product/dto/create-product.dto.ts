import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'iPhone 16 Pro' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'good' })
  desc: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 1000000 })
  price: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'https://example.com/image.png' })
  productImg: string;
}
