<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TripResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'start' => $this->departure,
            'end' => $this->arrival,
            'title' => $this->car->plate_number . ' - '. $this->purpose,
            'url' => route('trips.show', $this->id),
            'car' => CarResource::make($this->whenLoaded('car')),
        ];
    }
}
