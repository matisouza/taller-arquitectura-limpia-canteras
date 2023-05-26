import { MongooseOptionsFactory, MongooseModuleOptions } from "@nestjs/mongoose";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(private readonly configService: ConfigService) { }

  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: this.configService.get<string>('NOSQL_URI'),
    };
  }
}