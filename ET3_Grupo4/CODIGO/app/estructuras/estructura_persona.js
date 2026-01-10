const estructura_persona = {
    entity: 'persona',
    attributes: {
        dni: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 9
            },
            is_pk: true,
            rules: {
                validations: {
                    ADD: {
                        min_size: 9,
                        max_size: 9,
                        exp_reg: '^[0-9]{8}[A-Za-z]$'
                    },
                    EDIT: {
                        min_size: 9,
                        max_size: 9,
                        exp_reg: '^[0-9]{8}[A-Za-z]$'
                    },
                    SEARCH: {
                        max_size: 9,
                        exp_reg: '^[0-9A-Za-z]*$'
                    }
                }
            }
        },
        nombre_persona: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 20
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 2,
                        max_size: 25,
                        exp_reg: '^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$'
                    },
                    EDIT: {
                        min_size: 2,
                        max_size: 25,
                        exp_reg: '^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$'
                    },
                    SEARCH: {
                        max_size: 25,
                        exp_reg: '^[A-Za-zÁÉÍÓÚáéíóúÑñ ]*$'
                    }
                }
            }
        },
        apellidos_persona: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 35
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 2,
                        max_size: 35,
                        exp_reg: '^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$'
                    },
                    EDIT: {
                        min_size: 2,
                        max_size: 35,
                        exp_reg: '^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$'
                    },
                    SEARCH: {
                        max_size: 35,
                        exp_reg: '^[A-Za-zÁÉÍÓÚáéíóúÑñ ]*$'
                    }
                }
            }
        },
        fechaNacimiento_persona: {
            html: {
                tag: 'input',
                type: 'date'
            },
            rules: {
                validations: {
                    ADD: {
                        date_format: true
                    },
                    EDIT: {
                        date_format: true
                    },
                    SEARCH: {
                        date_format: true
                    }
                }
            }
        },
        direccion_persona: {
            html: {
                tag: 'textarea',
                rows: 3,
                columns: 40
            },
            rules: {
                validations: {
                    ADD: {
                        max_size: 100,
                        exp_reg: '^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9 ,\\.]+$'
                    },
                    EDIT: {
                        max_size: 100,
                        exp_reg: '^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9 ,\\.]+$'
                    },
                    SEARCH: {
                        max_size: 100,
                        exp_reg: '^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9 ,\\.]*$'
                    }
                }
            }
        },
        telefono_persona: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 9
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 9,
                        max_size: 9,
                        exp_reg: '^[0-9]+$'
                    },
                    EDIT: {
                        min_size: 9,
                        max_size: 9,
                        exp_reg: '^[0-9]+$'
                    },
                    SEARCH: {
                        max_size: 9,
                        exp_reg: '^[0-9]*$'
                    }
                }
            }
        },
        email_persona: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 40
            },
            rules: {
                validations: {
                    ADD: {
                        max_size: 40,
                        exp_reg: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
                    },
                    EDIT: {
                        max_size: 40,
                        exp_reg: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
                    },
                    SEARCH: {
                        max_size: 40
                    }
                }
            }
        },
        titulacion_persona: {
            html: {
                tag: 'select',
                options: ['GREI', 'GRIA', 'MEI', 'MIA', 'PCEO']
            },
            rules: {
                validations: {
                    ADD: {},
                    EDIT: {},
                    SEARCH: {}
                }
            }
        },
        menu_persona: {
            html: {
                tag: 'checkbox',
                options: ['Vegano', 'Celiaco', 'AlergiaMarisco']
            },
            rules: {
                validations: {
                    ADD: {},
                    EDIT: {},
                    SEARCH: {}
                }
            }
        },
        genero_persona: {
            html: {
                tag: 'radio',
                options: ['Masculino', 'Femenino', 'Otro']
            },
            rules: {
                validations: {
                    ADD: {},
                    EDIT: {},
                    SEARCH: {}
                }
            }
        },
        foto_persona: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 30
            },
            is_file_ref: true,
            file_server_path: 'http://193.147.87.202/ET2/filesuploaded/files_foto_persona/',
            rules: {
                validations: {
                    SEARCH: {
                        exp_reg: '^[a-zA-Z0-9_\\-\\.]*$'
                    }
                }
            }
        },
        nuevo_foto_persona: {
            html: {
                tag: 'input',
                type: 'file'
            },
            rules: {
                validations: {
                    ADD: {
                        no_file: true,
                        max_size_file: 2000000,
                        type_file: ['image/jpeg', 'image/jpg'],
                        format_name_file: '^[a-zA-Z0-9_\\-\\.]+\\.(jpg|jpeg)$'
                    },
                    EDIT: {
                        max_size_file: 2000000,
                        type_file: ['image/jpeg', 'image/jpg'],
                        format_name_file: '^[a-zA-Z0-9_\\-\\.]+\\.(jpg|jpeg)$'
                    }
                }
            }
        }
    }
};
