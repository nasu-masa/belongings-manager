<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

#[Fillable(['name'])]
class Location extends Model
{
    use HasFactory;

    /**
     * @return BelongsToMany<Item, $this, ItemLocation>
     */
    public function items(): BelongsToMany
    {
        return $this->belongsToMany(Item::class)
            ->using(ItemLocation::class)
            ->withPivot('id', 'quantity')
            ->withTimestamps();
    }
}
