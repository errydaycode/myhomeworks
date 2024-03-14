import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                width: '150px', // Ширина слайдера по всей доступной ширине контейнера
                color: 'primary.main', // Цвет слайдера

                '& .MuiSlider-rail': {
                    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Цвет полосы, по которой перемещается ползунок
                },

                '& .MuiSlider-track': {
                    backgroundColor: 'primary.main', // Цвет активной части полосы
                },

                '& .MuiSlider-thumb': {
                    backgroundColor: 'primary.main', // Цвет ползунка
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // Тень ползунка
                    '&:hover, &:active': {
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Тень ползунка при наведении или активации
                    },
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
