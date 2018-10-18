package org.colabos.configuration;

import java.net.UnknownHostException;
import java.util.ArrayList;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.MongoDbFactory;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.SimpleMongoDbFactory;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import com.mongodb.MongoClient;
import com.mongodb.MongoCredential;
import com.mongodb.ServerAddress;

@Configuration
@ComponentScan(basePackages = {"org.colabos"})
@EnableWebMvc
public class ApplicationConfig 
{
	public @Bean MongoClient mongoClient() throws UnknownHostException {
        return new MongoClient(new ServerAddress("ds119442.mlab.com", 19442), new ArrayList<MongoCredential>() {

            {
                add(MongoCredential.createCredential("govil", "govil10", "govil@123".toCharArray()));
            }
        });
    }
	
	@Bean
    public MongoDbFactory mongoDbFactory() throws Exception {
		return new SimpleMongoDbFactory(mongoClient(), "govil10");
    }
	
	
	 @Bean
	    public MongoTemplate mongoTemplate() throws Exception {
	        MongoTemplate mongoTemplate = new MongoTemplate(mongoDbFactory());
	        
	        System.out.println("Hello Mongo, Hello World..!!");
	        
	        return mongoTemplate;
	    }

}
