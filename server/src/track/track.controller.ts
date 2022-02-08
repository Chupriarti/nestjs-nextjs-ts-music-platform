import { Controller } from "@nestjs/common";
import { TrackService } from "./track.service";

@Controller('/api')
export class TrackController {

  constructor(private appService: TrackService){}

}
