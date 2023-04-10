<template>
    <div class="explain-area flip" id="p1">
        <div class="content">
            <div class="text color-white">
                <p>
                    Este é o  online :)
                </p>
                <p>
                    Faça um você mesmo!
                </p>
            </div>
        </div>
        <label for="c1" class="next-btn color-white">Avançar</label>
    </div>
    </template>
    
    <style scoped>
    
    .container__login .explain-area {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px;
        width: 100%;
        height: 100%;
        background: url('../../assets/images/explain-bg-1.jpg');
        background-color: rgba(0, 0, 0, 0.507);
        background-repeat: no-repeat;
        background-size: cover;
        background-blend-mode: darken;
        border-radius: 0 15px 15px 0;
    }
    
    .container__login .explain-area .text{
        font-size: 2.1vw;
    }
    
    .container__login .explain-area .content {
        display: flex;
        flex-direction: column;
    }
    
    .container__login .explain-area .content .btn-register button {
        padding: 10px 100px;
        height: 48.52px;
        background-color: #F8F8F8;
        font-size: 20px;
        border-radius: 11px;
        border: none;
        color: rgba(0, 0, 0, 0.79);
        cursor: pointer;
    }
    
    .next-btn {
        height: 100%;
        display: flex;
        align-items: center;
    }
    #c1:checked ~ .flip-book #p1 p, #c1:checked ~ .flip-book #p1 label {
        color: transparent !important;
        transition: 1s;
    }
    </style>