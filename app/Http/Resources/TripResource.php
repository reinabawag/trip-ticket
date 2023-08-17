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
            'user' => $this->user->name,
            'start' => $this->departure,
            'end' => $this->arrival,
            'title' => $this->car->plate_number . ' - '. $this->purpose,
            'url' => route('api.trips.show', $this->id),
            'driver' => $this->driver,
            'passenger' => $this->passenger,
        ];
    }
}
