enum SkillsEnum {
  NOVICE = "novice",
  BEGGINER = "begginer",
  COMPETENT = "competent",
  PROFICIENT = "proficient",
  EXPERT = "expert",
};

const skillsArray = new Map<string, SkillsEnum>([
  ["Communication", SkillsEnum.PROFICIENT],
  ["Teamwork", SkillsEnum.PROFICIENT],
  ["Adaptability", SkillsEnum.PROFICIENT],
  ["HTML", SkillsEnum.COMPETENT],
  ["CSS", SkillsEnum.COMPETENT],
  ["Javascript", SkillsEnum.BEGGINER],
  ["Typescript", SkillsEnum.BEGGINER],
  ["React", SkillsEnum.BEGGINER],
  ["Redux", SkillsEnum.BEGGINER],
  ["Git commands", SkillsEnum.BEGGINER],
  ["Visual Studio", SkillsEnum.COMPETENT],
]);

const SkillsTable: React.FC = () => {
  return (
    <div className="skills-style card">
      <table>
        <thead>
          <tr>
            <th>SKILLS</th>
          </tr>
        </thead>
        <tbody>
          {Array.from(skillsArray.entries()).map(([skill, level]) => (
            <tr key={skill}>
              <td>{skill}</td>
              <td>{level}</td>
            </tr>
          ))}
        </tbody>
        <br />
        <thead>
          <th>LANGUAGE</th>
        </thead>
        <tbody>
          <tr>
            <td>Estonia </td>
            <td>native</td>
          </tr>
          <tr>
            <td>English </td>
            <td>intermediate</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SkillsTable;