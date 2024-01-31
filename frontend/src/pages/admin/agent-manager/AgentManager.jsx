import "./userManager.css";
import { CiEdit, CiTrash } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Modal from "react-modal";
import "react-toastify/dist/ReactToastify.css";
import {
    Container,
    Title
} from "../../../components/styled-components/utilities";
import FormAgent from "../../../components/form/agent/FormAgent";
import { useAgentStore } from "../../../hooks/useAgentStore";
import Button from "../../../components/button/Button";
import { customStylesModal, customStylesTable } from "./../customStyles";

const AgentManager = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const {
        startDeletingAgent,
        startLoadingAgents,
        setActiveAgent,
        setError,
        agents
    } = useAgentStore();

    useEffect(() => {
        startLoadingAgents();
    }, []);

    const onClickRemoveAgent = _id => {
        startDeletingAgent(_id);
    };

    const onClickSelectAgent = row => {
        setActiveAgent(row);
        openModal();
    };

    const columns = [
        { name: "id", selector: row => row._id, omit: true },
        { name: "Dni", selector: row => row.dni },
        { name: "Nombre completo", selector: row => row.full_name },
        { name: "Email", selector: row => row.email },
        { name: "Celular", selector: row => row.cellphone },
        {
            cell: row => (
                <>
                    <button
                        className='user-manager__button user-manager__button--edit'
                        onClick={onClickSelectAgent}
                        data-tag='allowRowEvents'
                    >
                        <CiEdit size={24} data-tag='allowRowEvents' />
                    </button>
                    <button
                        className='user-manager__button user-manager__button--remove'
                        onClick={() => onClickRemoveAgent(row._id)}
                    >
                        <CiTrash size={24} />
                    </button>
                </>
            )
        }
    ];

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => {
        setModalIsOpen(false);
        setActiveAgent(null);
        setError(undefined);
    };

    const subHeaderComponent = React.useMemo(() => {
        return (
            <div className='user-manager__subheader'>
                <Button action={openModal} icon={<IoMdAdd size={18} />} outline>
                    Agregar nuevo agente
                </Button>
            </div>
        );
    }, []);

    return (
        <Container>
            <Modal
                isOpen={modalIsOpen}
                style={customStylesModal}
                ariaHideApp={false}
            >
                <div
                    className='user-manager__button user-manager__button--close'
                    onClick={closeModal}
                >
                    <IoMdClose size={24} />
                </div>
                <Title>Información del agente</Title>
                <FormAgent handleCloseForm={closeModal} />
            </Modal>
            <div className='user-manager__wrapper-table'>
                <DataTable
                    title='Listado de agentes inmobiliarios'
                    columns={columns}
                    data={agents}
                    dense
                    customStyles={customStylesTable}
                    subHeader
                    subHeaderComponent={subHeaderComponent}
                    noDataComponent='No hay agentes registrados'
                    onRowClicked={onClickSelectAgent}
                ></DataTable>
            </div>
        </Container>
    );
};

export default AgentManager;
