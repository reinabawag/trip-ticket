<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Str;

class TripCarResource extends JsonResource
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
            'name' => $this->user->name,
            'id' => Str::of($this->id)->padLeft(7, '0'),
            'departure' => $this->departure->format('Y-m-d h:i A'),
            'arrival' => $this->arrival->format('Y-m-d h:i A'),
            'purpose' => $this->purpose,
            'address' => $this->address,
            'driver' => $this->driver,
            'passenger' => $this->passenger,
            'is_approved' => $this->is_approved,
            'is_active' => $this->is_active,
            'car' => CarResource::make($this->whenLoaded('car')),
        ];
    }
}
