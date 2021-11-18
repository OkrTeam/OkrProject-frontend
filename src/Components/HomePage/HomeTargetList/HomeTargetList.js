import DropDown from '../../DropDown'
import React, {useState} from 'react'
import {Collapse, Button, CardBody, Card, Table} from 'reactstrap';
import s from './homeTargetList.module.css'


const HomeTargetList = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
    <>
        {props.goalArray.map((goal) => {
            return (
                <div>
                    <Button className={s.target_btn} onClick={toggle} style={{ marginBottom: '1rem' }}>
                        {goal.goalname}
                    <div className="progress"> {/*прогресс тут из бутстрапа, мб можно будет поменять потом*/}
                            <div className={s.progress_perc} role="progressbar" st style={{ width: `${goal.prog}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                    </Button>
                    <Collapse isOpen={isOpen}>
                        <Card className={s.card_margin_btm}>
                            <CardBody className={s.card_fix}>
                                <div>
                                    <Table striped>
                                        <tbody>
                                            <DropDown subgoals={goal.subgoals} />
                                        </tbody>
                                    </Table>
                                </div>
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>

            );
        })}
        </>
    )
}

export default HomeTargetList
