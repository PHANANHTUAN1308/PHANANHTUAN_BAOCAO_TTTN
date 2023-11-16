<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up():void
    {
        Schema::create('db_contact', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('user_id')->default(1);
            $table->string('name');
            $table->string('email');
            $table->string('phone');
            $table->string('title',1000);
            $table->mediumText('content');
            $table->unsignedInteger('replay_id')->defaut(1);
            $table->timestamps(); 
            $table->unsignedInteger('create_by')->default(1);
            $table->unsignedInteger('update_by')->nullable();
            $table->unsignedTinyInteger('status')->default(2);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('db_contact');
    }
};
