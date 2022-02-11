import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { FileModule } from "./file/file.module";
import { TrackModule } from "./track/track.module";

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    TrackModule,
    FileModule
  ]
})
export class AppModule {}
