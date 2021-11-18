import React, { useState } from 'react'
import './targetList.css'

function AddProgress(props) {

    const [state, setState] = useState({
        value: props.value
    });


    return (
            <div class="modal fade" id={props.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content height-modal font">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Внести прогресс</h5>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="flex-block">
                                    <div>
                                        <label for="progressRange" class="modal-text">Прогресс</label>
                                        <p class="progress-percent">{state.value}</p>
                                        <input type="text" id="progressRange" class="progress-range" />
                                    </div>
                                    <div class="comment-input">
                                        <label class="modal-text">Комментарий:</label>
                                        <textarea rows="12" cols="55" class="commentary modal-text"></textarea>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="purple-btn" data-bs-dismiss="modal">Закрыть</button>
                            <button type="button" class="orange-btn">Зафиксировать</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    
}

export default AddProgress