import { ChangeEventHandler, FC } from "react";
import { Button, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import useAddTodo from "./useAddTodo";
import { IAddTodoProps } from "../../models/IAddTodoProps";
import "./style.scss";
import "./responsive.scss";

const AddTodo: FC = () => {
  const {
    name,
    description,
    onChangeName,
    onChangeDescription,
    onKeyDown,
    onAddTodo,
  }: IAddTodoProps = useAddTodo();

  return (
    <div className="g-page">
      <div className="add-todo">
        <div className="add-todo--name">
          <Input
            value={name}
            onChange={onChangeName}
            onKeyDown={onKeyDown}
            placeholder="Todo Name"
            autoComplete="on"
          />
        </div>
        <div className="add-todo--descr">
          <TextArea
            value={description}
            onChange={onChangeDescription}
            onKeyDown={onKeyDown}
            placeholder="Todo Description"
          />
        </div>
        <div className="add-todo--btn">
          <Button
            onClick={onAddTodo}
            disabled={!name || !description}
            type="primary"
          >
            Add Todo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
