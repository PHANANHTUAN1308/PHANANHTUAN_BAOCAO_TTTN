<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('db_config', function (Blueprint $table) {
            $table->id();
            
            $table->string('author');
            $table->string('email');
            $table->string('phone');
            $table->string('zalo');
            $table->string('facebook');
            $table->string('address');
            $table->string('youtobe');
            $table->string('metadesc');
            $table->string('metekey');
            $table->timestamps(); 
            $table->unsignedInteger('create_by')->default(1);
            $table->unsignedInteger('update_by')->nullable();
            $table->unsignedTinyInteger('status')->default(1);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('db_config');
    }
};
