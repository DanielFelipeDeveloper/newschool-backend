import { Part } from '../entity';
import { ApiModelProperty } from '@nestjs/swagger';

export class PartDTO {
    @ApiModelProperty({ type: String })
    id: Part['id'];

    @ApiModelProperty({ type: String })
    title: Part['title'];

    @ApiModelProperty({ type: String })
    description: Part['description'];

    @ApiModelProperty({ type: String })
    vimeoUrl: Part['vimeoUrl'];

    @ApiModelProperty({ type: String })
    youtubeUrl: Part['youtubeUrl'];

    @ApiModelProperty({ type: String })
    lessonId: Part['lessonId'];

    @ApiModelProperty({ type: String })
    nextPartId: Part['nextPartId'];
}
