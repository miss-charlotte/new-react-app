import React, { useState } from 'react'
import Search from './Search';
import '../App.css'

export default function Weather () {
    return (
      <>
        <div className="Weather">
          <Search defaultCity="Kampala" />

        </div>
      </>
    );
}