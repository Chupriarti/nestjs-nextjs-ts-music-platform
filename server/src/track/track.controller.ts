import { Body, Controller, Post } from "@nestjs/common";
import { CreateTrackDto } from "./dto/create-track.dto";
import { TrackService } from "./track.service";

@Controller('/tracks')
export class TrackController {
  constructor(private trackService: TrackService){}

  @Post()
  create(@Body() dto: CreateTrackDto){
    return this.trackService.create(dto)
  }

  getAll(){

  }

  getOne(){

  }

  delete(){

  }
}
