import { IoMdAdd, IoMdClose } from "react-icons/io";
import React, { useEffect, useState } from "react";
import {
    Container,
    Title
} from "../../../components/styled-components/utilities";
import Modal from "react-modal";
import DataTable from "react-data-table-component";
import { CiEdit, CiTrash } from "react-icons/ci";
import { useAdminStore } from "../../../hooks/useAdminStore";
import Button from "../../../components/button/Button";
import FormAdmin from "../../../components/form/admin/FormAdmin";
import { useAuthStore } from "../../../hooks/useAuthStore";
import { toast } from "react-toastify";
import { customStylesModal, customStylesTable } from "./../customStyles";

const AdminManager = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { user } = useAuthStore();
    const {
        startLoadingAdmins,
        setActiveAdmin,
        startDeletingAdmin,
        setErrors,
        admins
    } = useAdminStore();

    useEffect(() => {
        startLoadingAdmins();
    }, []);

    const onClickRemoveAdmin = _id => {
        if (_id === user._id) {
            toast.error("No es posible eliminar al administrador indicado", {
                autoClose: 2500,
                theme: "colored"
            });
        } else {
            startDeletingAdmin(_id);
        }
    };

    const onClickSelectAdmin = row => {
        setActiveAdmin(row);
        openModal();
    };

    const openModal = () => setModalIsOpen(true);

    const closeModal = () => {
        setModalIsOpen(false);
        setActiveAdmin(null);
        setErrors(undefined);
    };

    const subHeaderComponent = React.useMemo(() => {
        return (
            <div className='user-manager__subheader'>
                <Button action={openModal} icon={<IoMdAdd size={18} />} outline>
                    Agregar nuevo administrador
                </Button>
            </div>
        );
    }, []);

    const columns = [
        { name: "id", selector: row => row._id, omit: true },
        { name: "Dni", selector: row => row.dni },
        { name: "Nombre completo", selector: row => row.full_name },
        { name: "Email", selector: row => row.email },
        { name: "Usuario", selector: row => row.user },
        {
            cell: row => (
                <>
                    <button
                        className='user-manager__button user-manager__button--edit'
                        onClick={onClickSelectAdmin}
                        data-tag='allowRowEvents'
                    >
                        <CiEdit size={24} data-tag='allowRowEvents' />
                    </button>
                    <button
                        className='user-manager__button user-manager__button--remove'
                        onClick={() => onClickRemoveAdmin(row._id)}
                    >
                        <CiTrash size={24} />
                    </button>
                </>
            )
        }
    ];

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
                <Title>Registro de administrador</Title>
                <FormAdmin handleCloseForm={closeModal} />
            </Modal>
            <div className='user-manager__wrapper-table'>
                <DataTable
                    title='Listado de administradores'
                    columns={columns}
                    data={admins}
                    dense
                    customStyles={customStylesTable}
                    subHeader
                    subHeaderComponent={subHeaderComponent}
                    noDataComponent='No hay agentes registrados'
                    onRowClicked={onClickSelectAdmin}
                ></DataTable>
            </div>
        </Container>
    );
};

export default AdminManager;
