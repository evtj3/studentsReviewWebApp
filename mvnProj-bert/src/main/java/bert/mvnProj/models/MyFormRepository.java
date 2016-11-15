package bert.mvnProj.models;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
//
@Repository
public interface MyFormRepository extends JpaRepository<MyForm, Long> {
	//MyForm findOneByEmail(String email);
}