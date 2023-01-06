import Paciente from "./Paciente.js";
import Psicologo from "./Psicologo.js";
import Atendimento from "./Atendimento.js";

Paciente.hasMany(Atendimento, { foreignKey: 'paciente_id' });
Atendimento.belongsTo(Paciente, { foreignKey: 'paciente_id' });

Psicologo.hasMany(Atendimento, { foreignKey: 'psicologo_id' });
Atendimento.belongsTo(Psicologo, { foreignKey: 'psicologo_id' });

export {Paciente, Psicologo, Atendimento};