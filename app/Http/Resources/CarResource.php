<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CarResource extends JsonResource
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
            'plate_number' => $this->plate_number,
            'make' => $this->make,
            'model' => $this->model,
            'transmission' => $this->transmission,
            'user_id' => $this->user_id,
            'image' => ! is_null($this->photo) ? asset("storage/$this->photo") : 'https://picsum.photos/200/',
            'status' => $this->status,
            'user' => $this->whenLoaded('user')
        ];
    }
}
