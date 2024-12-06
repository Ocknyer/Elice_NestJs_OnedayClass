import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // create product api
  @Post('/new')
  async createProduct(
    @Body() createProductDto: CreateProductDto,
  ): Promise<Product> {
    return await this.productService.createProduct(createProductDto);
  }

  // get all products
  @Get('/all')
  async getAllProducts(): Promise<Product[]> {
    return await this.productService.getAllProducts();
  }

  // get product by id
  @Get('/:id')
  async getProductById(@Param('id') id: string): Promise<Product> {
    return await this.productService.getProductById(id);
  }

  // update product by id
  // 수정하고자 하는 대상자(Param), 수정할 내용(Body)
  @Put('/:id')
  async updateProductById(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<boolean> {
    return await this.productService.updateProductById(id, updateProductDto);
  }

  // delete product by id
  @Delete('/:id')
  async deleteProductById(@Param('id') id: string): Promise<boolean> {
    return await this.productService.deleteProductById(id);
  }
}
