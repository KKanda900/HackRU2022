import React from 'react'
import TextLoop from 'react-text-loop'
import CardShowCase from './CardShowCase'
import { TryDocOnButton } from './TryDocOnButton'

export default function PitchText() {
    return (
        <div>
            <div class="grid grid-flow-row-dense grid-cols-2 pt-10 ...">
                <h2 col-span-1 pt-6>A <TextLoop children={['Healthy', 'Confident', 'Fit', "Secure"]} interval={1050} /> lifestyle is a document away from your doctor. <br />
                    <h3 class="font-railway pt-4"> With our encrypted and secure network, don’t hesitate to update your health provider at any time.</h3>
                </h2>
                <div class='pl-10'>
                    <CardShowCase />
                </div>
            </div>
            <div align='center' class='pt-10'>
                <TryDocOnButton />
            </div>
        </div>

    )
}
